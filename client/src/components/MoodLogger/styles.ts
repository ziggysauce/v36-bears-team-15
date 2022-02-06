import styled from 'styled-components';

export const h1 = styled.h1`
  font-size: 3em;
  margin-bottom: 1em;
`;

export const Wrapper = styled.main`
  background-color: #231651;
  color: #fff;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MoodContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const MoodCard = styled.div`
  border: 1px solid #ff0057;
  border-radius: 3px;
  padding: 1em;
  margin: 10px;
  cursor: pointer;
`;

export const MoodContent = styled.div`
  padding: 1em;
  font-size: 3em;
`;

export const EntryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff0057;
  border-radius: 3px;
  padding: 1em;
  margin: 0.5em 0;
`;

export const EntryCardMood = styled.div`
  font-size: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > span {
    padding: 0 9px 0 3px;
  }
`;

export const EntryCardNote = styled.div`
  width: 100%;
  padding: 0.5em;
  margin-top: 0.5em;
  border-radius: 3px;
  background-color: rgb(220 199 248 / 26%);
  color: #fff;
`;

export const TextArea = styled.textarea`
  margin: 1em 1em 0 1em;
  padding: 0.5em;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 3px;
  background-color: #ff0057;
  color: #fff;
  padding: 1em;
  margin: 1em;
`;

export const LinkButton = styled.button`
  color: #ff0057;
  cursor: pointer;
  border: 0;
  outline: 0;
  padding: 0.5em;
  width: 100%;
`;
