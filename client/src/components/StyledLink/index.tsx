import * as S from './styles';
import Link from 'next/link';

const StyledLink = ({ label, href }) => (
  <Link href={href} passHref>
    <S.NavLink>{label}</S.NavLink>
  </Link>
);

export default StyledLink;
