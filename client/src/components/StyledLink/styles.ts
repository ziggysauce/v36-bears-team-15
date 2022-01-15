import styled from 'styled-components';

export const NavLink = styled.a`
  font-size: 2rem;
  font-weight: 400;
  color: #ff0057;
  text-decoration: none;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: start;

  :hover {
    text-decoration: underline;
  }
`;
