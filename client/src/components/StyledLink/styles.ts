import styled from 'styled-components';
import {
  buildResponsiveRules,
  ResponsiveRuleValue,
} from '../../styles/breakpoint';
import { BaseProps, baseStyles, getColorFromKey } from '../../styles/base';

import { Colors } from '../../styles/theme';

export type LinkProps = BaseProps & {
  $color?: ResponsiveRuleValue<Colors>;
};

export const NavLink = styled.a<LinkProps>`
  ${baseStyles}
  display: block;
  font-size: 1.7rem;
  font-weight: 500;
  text-decoration: none;
  align-items: start;
  padding: 0.5rem;
  ${({ $color = 'gray' }) =>
    $color && buildResponsiveRules<Colors>('color', $color, getColorFromKey)}

  :hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;
