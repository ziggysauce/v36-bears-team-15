import styled from 'styled-components';
import {
  buildResponsiveRules,
  ResponsiveRuleValue,
} from '../../styles/breakpoint';
import { convertRhythmToRems } from '../../styles/base';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;

  background-color: ${({ theme }) => theme.color.white};

  margin: auto;
  box-sizing: border-box;

  touch-action: none;
  overflow: hidden;
`;

type VstackProps = {
  size?: ResponsiveRuleValue<number>;
  as?: React.ElementType;
  children?: React.ReactNode;
};

// TODO: add vertical spacing gap spacing={{ base: '2rem', lg: '6rem' }}
// TODO: https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/ read more about owl selector and how it can be controlled to set margin in children elements
export const Vstack = styled.main<VstackProps>`
  & > * + * {
    ${({ size = 3 }) =>
      buildResponsiveRules('margin-top', size, convertRhythmToRems)};
  }

  width: inherit;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.color.white};

  margin-left: 3rem;
  margin-inline-start: 5rem;
  margin-block-start: 5rem;

  margin-bottom: 0;
  margin-inline-end: 0;
  margin-block-end: 0;

  // Just a quick padding fix, but there are better ways to do it than inlining it
  @media (min-width: 1300px) {
    margin-inline-start: 9rem;
    margin-block-start: 6rem;
    padding: 0.5rem;
  }

  // padding: 0.125rem;
`;
