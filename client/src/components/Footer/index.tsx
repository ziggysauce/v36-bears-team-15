import * as S from './styles';
import { Text, TextProps } from '../Text';

type FooterProps = {
  isSmall?: boolean;
};

// TODO: add different styles fi the screen is small
const Footer = ({ isSmall }: FooterProps) => {
  return isSmall ? (
    <S.Footer>
      <Copyright />
    </S.Footer>
  ) : (
    <S.Footer>
      <Copyright />
    </S.Footer>
  );
};

export const Copyright = (props: TextProps) => (
  <Text {...props}>
    &copy; {new Date().getFullYear()} Peak Productivity, All rights reserved.
  </Text>
);

export default Footer;
