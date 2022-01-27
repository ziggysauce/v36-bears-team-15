import * as S from './styles';
import Link from 'next/link';

// TODO: Implement StyledLink variants
const StyledLink = ({ label, href, ...props }) => (
  <Link href={href} passHref>
    <S.NavLink {...props}>{label}</S.NavLink>
  </Link>
);

export const StyledNavLink = ({ label, href, ...props }) => (
  <Link href={href} passHref>
    <S.NavLink {...props}>{label}</S.NavLink>
  </Link>
);

export default StyledLink;
