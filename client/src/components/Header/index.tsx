import * as S from './styles';
import { Box } from '../Box';

const Header = () => (
  <S.Wrapper>
    <h1>Header</h1>
    <Box bottom={[3]}>Wtf is this div element is doing</Box>
  </S.Wrapper>
);

export default Header;
