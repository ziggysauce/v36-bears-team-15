/*
  TODO: Make a custom Icon component to handle svg icons,
  or use a library to resolve this issue, I don't have time to
  figure out how to correctly use svg icon imported in some other file,
  navigation data should just import Icon, and pass it to <Icon icon={someIcon}>
*/
import * as S from './styles';
import { StyledNavLink } from '../StyledLink';
import { Box, Flex, Headline4 } from '../index';
import { navigation } from '../../data/navigation';
import { IconContext } from 'react-icons';

function Icon({ icon, ...props }) {
  return (
    <IconContext.Provider value={{ color: 'gray', size: '1.3em' }}>
      <Box {...props}>{icon}</Box>
    </IconContext.Provider>
  );
}

const Sidebar = () => (
  <S.NavWrapper>
    <Headline4 marginBottom={10} textAlign="center">
      Peak <br />
      Productivity
    </Headline4>

    <Flex direction="column" justify="space-between" align="flex-start">
      {navigation.map((navElem) => (
        <Box key={navElem.label} top={2}>
          <Flex direction="row">
            <Icon icon={navElem.Icon} right={0.5} />
            <StyledNavLink href={navElem.href} label={navElem.label} />
          </Flex>
        </Box>
      ))}
    </Flex>
  </S.NavWrapper>
);

export default Sidebar;
