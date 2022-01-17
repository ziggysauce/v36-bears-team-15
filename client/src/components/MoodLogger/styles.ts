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
`;

export const MoodCard = styled.div`
  border: 1px solid #ff0057;
  border-radius: 3px;
  padding: 1em;
  margin: 1em;
  cursor: pointer;
`;

export const MoodContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const EntryCard = styled.div`
  border: 1px solid #ff0057;
  border-radius: 3px;
  padding: 1em;
  margin: 1em;
  display: flex;
  flx-direction: row;
  justify-content: center;
  align-items: center;
`;

export const EntryContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const Button = styled.button`
  border-radius: 3px;
  background-color: #ff0057;
  color: #fff;
  padding: 1em;
  margin: 1em;
`;
