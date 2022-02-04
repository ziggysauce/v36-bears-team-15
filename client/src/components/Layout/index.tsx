import * as S from './styles';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navigation } from '../Navigation';
import { useToggle } from '../../hooks/useToggle';
import { useMediaQuerySSR } from '../../hooks/useMediaQuerySsr';
import NoSsr from '../../hooks/noSsr';
// import Footer from '../Footer';

// TODO: Pretty much a hack, probably better to explicitly type available to use in <meta> inside SEO comp
export type CustomMeta = { [x: string]: string };

export type LayoutProps = {
  children: React.ReactNode;
  customMeta: CustomMeta;
};

const Layout = ({ children, customMeta }: LayoutProps) => {
  /* isSmall ONLY for screens with 700px or less width Table + Mobile */
  const [isSmall] = useMediaQuerySSR('(max-width: 700px)');
  const [isXLarge] = useMediaQuerySSR('(min-width: 1300px)');
  console.log(isXLarge);
  // TODO: Write to tests to make sure it works as expected and it doesn't need useLayoutEffect
  const [isToggled, toggle] = useToggle(() => (isSmall ? false : true));

  return (
    <S.Container>
      <Seo {...customMeta} />
      {/*
        Navigation is wrapped as NoSsr components, because
        I can't fix framer + NextJs initial width issue
        for now. TODO: Investigate other options.
      */}
      <NoSsr>
        <Navigation
          isOpen={isToggled}
          isMobile={isSmall}
          isXLarge={isXLarge}
          toggle={toggle}
        />
      </NoSsr>
      {/* This is <main> html element which is going to hold all other content and align elems vertically */}
      <S.Vstack>
        {children}
        {/* I'm not sure if we need footer placement on the page at all, due to our design */}
        {/* <Footer isSmall={isSmall} /> */}
      </S.Vstack>
    </S.Container>
  );
};

// TODO: Improve SEO
const Seo = ({ ...customMeta }: CustomMeta) => {
  const router = useRouter();

  const meta: CustomMeta = {
    title: 'Peak Productivity',
    description: 'The best all in one app to stay organized.',
    type: 'website',
    // TODO: Add Banner
    image: 'https://site.com/static/images/banner.png',
    ...customMeta,
  };

  // TODO: Write down correct url paths
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`https://mynotactivesite.com${router.asPath}`}
      />

      <link
        rel="canonical"
        href={`https://mynotactivesite.com${router.asPath}`}
      />

      <link rel="icon" href="/static/favicons/favicon.ico" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Peak Productivity" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@peakproductivity" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta?.date && (
        <meta property="article:published_time" content={meta?.date} />
      )}
    </Head>
  );
};

export default Layout;
