import * as S from './styles';
import Footer from '../Footer';

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS & Styled Components',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Footer />
  </S.Wrapper>
);

export default Main;
