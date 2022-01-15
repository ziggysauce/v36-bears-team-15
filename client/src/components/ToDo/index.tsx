import * as S from './styles';
import StyledLink from '../StyledLink';

const Todo = () => (
  <S.Wrapper>
    <StyledLink href="/" label="Go Back Home" />
    <h1>To-Do</h1>
    <p>To-Do stuff will go here.</p>
  </S.Wrapper>
);

export default Todo;
