/*
  TODO: Better infinite scroll, actually fetching previous page, styling, etc.
  Set up bi-directional infinite scroll, right now it's only forward.
*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import queryClient from "../lib/react-query";
import ProjectCard from "../components/post-card";
import { useMediaQuerySSR } from "../hooks/useMediaQuerySsr";
import { dehydrate, useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import { Container } from "../layouts/container";
import { ContentWrapper } from "../layouts/content-wrapper";
import { Box, Badge, VStack, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { SearchBar } from "../components/search-bar";

// { cursor = "" } pass state object to query
async function fetchPosts({ pageParam = "" }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/infinite?cursor=${pageParam}`
  );
  // data
  return res.data;
}

const useProjectsQuery = () => {
  return useInfiniteQuery(["projects"], fetchPosts, {
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? false,
  });
};

export default function Home() {
  const router = useRouter();
  const { ref, inView } = useInView();
  const [isMobile] = useMediaQuerySSR("(max-width: 620px)");

  /* Refresh Data alongside server side props */
  const refreshData = () => {
    router.replace(router.asPath, undefined, { shallow: true });
  };

  /* Fetching data on the client */
  // const {
  //   status,
  //   error,
  //   data,
  //   fetchNextPage,
  //   // fetchPreviousPage,
  //   hasNextPage,
  //   isFetchingNextPage,
  // } = useInfiniteQuery(
  //   ["projects"],
  //   async ({ pageParam = "" }) => {
  //     const res = await axios.get(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/infinite?cursor=${pageParam}`
  //     );

  //     return res.data;
  //   },
  //   {
  //     getNextPageParam: (lastPage) => lastPage.nextCursor ?? false,
  //   }
  // );
  const {
    status,
    error,
    data,
    fetchNextPage,
    // fetchPreviousPage,
    hasNextPage,
    isFetchingNextPage,
  } = useProjectsQuery();

  // Listen if it needs to load more data
  useEffect(() => {
    if (inView && hasNextPage && status !== "error") {
      //set query value to the nextCursor value
      const query = router.query;
      const lastPageCursor = data.pages[data.pages.length - 1].nextCursor;
      // set both query path for server side and state object for client side
      query.cursor = lastPageCursor;
      // push the router, refresh page silently and fetch next page
      router.push(
        {
          pathname: router.pathname,
          query: query,
        },
        undefined,
        {
          shallow: true,
        }
      );
      refreshData();
      fetchNextPage();
    }
  }, [inView]);

  // Test Listener
  // useEffect(() => {
  //   console.log("router has been refreshed");
  // }, [router.query.cursor]);

  return (
    <Container title="Home Page | Chingu Board">
      <ContentWrapper>
        <VStack as="section">
          {/* TODO: Move Flex Container To Search Bar File */}
          <SearchBar />

          {error && <Text>{error.message}</Text>}
          {status === "loading" ? (
            <Spinner size="lg" />
          ) : (
            <>
              <Badge mx="2rem" variant="secondary">
                Items found: {data.pages[0].count}
              </Badge>
              {/* Map the data */}
              {data &&
                data.pages.map((page) => {
                  return (
                    <React.Fragment key={page.nextCursor ?? "lastPage"}>
                      {page.projects.map((p) => (
                        <ProjectCard
                          key={p.id}
                          isMobile={isMobile}
                          project={p}
                        />
                      ))}
                    </React.Fragment>
                  );
                })}
              {/* Fix the style center the element */}

              {isFetchingNextPage ? <Spinner size="lg" /> : null}
            </>
          )}
        </VStack>
        {/* Determines if the next page needs to be fetched  */}
        <span style={{ visibility: "hidden" }} ref={ref}>
          intersection observer marker
        </span>
      </ContentWrapper>
    </Container>
  );
}

export const getServerSideProps = async ({ query }) => {
  // query all projects with particular team data relevant to the use case on this page
  // sorts the data in descending order by the date of creation
  const cursor = query.cursor ? query.cursor : "";
  console.log(cursor);
  // why is it not working?
  await queryClient.prefetchInfiniteQuery(["projects"], fetchPosts);

  // Those JSON methods can open website to vulnerabilities, look for a way to fix dehydration serialization problem
  // https://github.com/tannerlinsley/react-query/issues/1458
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
