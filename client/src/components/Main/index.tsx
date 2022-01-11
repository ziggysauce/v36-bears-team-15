import * as S from './styles';
import Header from '../Header';

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
}) => (
  <S.Wrapper>
    <Header />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Header />
  </S.Wrapper>
);

export default Main;
