import styled from 'styled-components';
import { BaseProps, baseStyles } from '../styles/base';
import {
  buildResponsiveRules,
  ResponsiveRuleValue,
} from '../styles/breakpoint';

type JustifyValues =
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'flex-start'
  | 'flex-end';

type AlignValues =
  | 'stretch'
  | 'center'
  | 'baseline'
  | 'flex-start'
  | 'flex-end';

type DirectionValues = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type WrapValues = 'nowrap' | 'wrap' | 'wrap-reverse';

type FlexProps = BaseProps & {
  direction?: ResponsiveRuleValue<DirectionValues>;
  shrink?: boolean;
  align?: ResponsiveRuleValue<AlignValues>;
  justify?: ResponsiveRuleValue<JustifyValues>;
  wrap?: ResponsiveRuleValue<WrapValues>;
};

export const Flex = styled.div<FlexProps>`
  ${baseStyles}
  display: flex;
  ${({ align }) =>
    align && buildResponsiveRules<AlignValues>('align-items', align)}
  ${({ justify }) =>
    justify && buildResponsiveRules<JustifyValues>('justify-content', justify)}
  ${({ wrap }) => wrap && buildResponsiveRules<WrapValues>('flex-wrap', wrap)}
  ${({ direction = 'row' }) =>
    buildResponsiveRules<DirectionValues>('flex-direction', direction)}
`;
