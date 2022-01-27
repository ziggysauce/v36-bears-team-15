import styled from 'styled-components';
// import { BorderRadius, Colors } from '../../styles/theme';

export const NavWrapper = styled.nav`
  height: 100vh;
  width: 20vw;
  background-color: ${({ theme }) => theme.color.white};
  border-color: ${({ theme }) => theme.color.secondary} !important;
  border-right: 1px solid;

  padding: 1rem;

  h4 {
    margin-bottom: 6rem;
  }

  a {
    margin-bottom: 0.5rem;
    padding: 3px;
  }
`;
