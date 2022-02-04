// import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { BorderRadius, Colors } from '../../styles/theme';

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  width?: number;
}

export const Container = styled(motion.header)<NavigationProps>`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: 100vh;
  // Touch action needs to be disabled for Framer Handlers work correctly.
  touch-action: none;
`;

export const SidebarContainer = styled(motion.div)<NavigationProps>`
  position: fixed;
  width: ${({ width }) => `${width}px`};
  height: 98vh;
  box-sizing: border-box;
  box-shadow: 2px 0 7px -1px #b9dde7;
  background-color: ${({ theme }) => theme.aColor('primary', 10)};

  border-right-color: ${({ theme }) => theme.aColor('primary', 40)} !important;
  border-left-color: ${({ theme }) =>
    theme.aColor('secondary', 100)} !important;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 2rem;
  border-right: 0.3rem solid;
  border-left: 0.5rem solid;

  padding: 1rem;
  margin-top: 0.7rem;

  // TODO: Make it standard responsive, hardcoded value without a bp is kindda bad
  // check support across browsers
  @media (max-width: 700px) {
    // backdrop-filter: blur(12em);
    padding: 0rem;
    margin-top: 0rem;
    /* if backdrop support: very transparent and blurred */
    @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
      -webkit-backdrop-filter: blur(1rem);
      backdrop-filter: blur(1rem);
    }
  }

  h4 {
    text-align: left;
  }

  a {
    margin-bottom: 0.5rem;
    padding: 3px;
  }
  z-index: 10;
`;

export const HamburgerContainer = styled(motion.button)`
  position: fixed;
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  // inset: 2rem 0 10rem 2.5rem;
  cursor: pointer;
  z-index: 20;
  -webkit-tap-highlight-color: transparent;
`;

// styles will be broken if u put anything else except text
export const LogoContainer = styled(motion.div)`
  position: fixed;
  inset: 6rem auto auto 3rem;
  z-index: 20;
`;

export const Line = styled(motion.div)<NavigationProps>`
  background-color: ${({ theme }) => theme.color.primary};
  width: ${({ width }) => `${width}px`};
  height: 2px;
  margin: 2px 14px;
  border-radius: 8px;
`;

export const ChildrenContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  inset: 30rem auto auto 2rem;
  left: 1rem;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;
