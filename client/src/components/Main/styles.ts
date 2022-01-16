import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: #231651;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Navigation = styled.div`
  padding: 1em;
  margin: 1em;
  border: 1px solid #fff;
  border-radius: 3px;
`;

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
