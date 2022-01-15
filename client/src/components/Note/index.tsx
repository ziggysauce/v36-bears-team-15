import * as S from './styles';
import StyledLink from '../StyledLink';

const Note = () => (
  <S.Wrapper>
    <StyledLink href="/" label="Go Back Home" />
    <h1>Note</h1>
    <p>Note stuff will go here.</p>
  </S.Wrapper>
);

export default Note;
