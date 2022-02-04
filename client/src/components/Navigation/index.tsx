/*
  TODO: Make a custom Icon component to handle svg icons,
  or use a library to resolve this issue, I don't have time to
  figure out how to correctly use svg icon imported in some other file,
  navigation data should just import Icon, and pass it to <Icon icon={someIcon}>
*/
import React, { useEffect } from 'react';
import * as S from './styles';
import { StyledNavLink } from '../StyledLink';
import { Box, Flex, Headline4 } from '../index';
import { navigation } from '../../data/navigation';
import { IconContext } from 'react-icons';
import { MotionValue, useSpring } from 'framer-motion';

type NavigationProps = {
  isMobile: boolean;
  isXLarge: boolean;
  isOpen: boolean;
  toggle: () => void;
};

export const Navigation = ({
  isMobile,
  isXLarge,
  isOpen,
  toggle,
}: NavigationProps) => {
  const x = useSpring(0, { stiffness: 400, damping: 40 });
  // const [width, setWidth] = useState<number>(170); // isMobile ? 200 : 170;

  // That's not a good way to set width on every rerender
  // can create performance issues, but leave as is, for now/
  const width = (() => {
    if (isMobile) return 210;
    if (isXLarge) return 210;
    return 170;
  })();

  // console.log('Width', width, 'isMobile:', isMobile, 'isOpen', isOpen, 'isXLarge', isXLarge);
  useEffect(() => {
    // If Sidebar is closed and screen size increased, set w to init and set toggle to true
    if (!isOpen && !isMobile) {
      toggle();
      x.set(0);
    }
    // If opposite resize happens
    if (isOpen && isMobile) {
      toggle();
      x.set(-width);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const handleOnPan = (e, pointInfo) => {
    if (pointInfo.point.x < width) x.set(pointInfo.point.x - width);
  };
  const handleOnPanEnd = (e, pointInfo) => {
    if (Math.abs(pointInfo.velocity.x) > 1000 && !isOpen) {
      if (pointInfo.velocity.x > 0) x.set(0);
      else x.set(-width);
    } else {
      // get() -> returns x.current value
      if (Math.abs(x.get()) < width / 2) {
        x.set(0);
        toggle();
      } else {
        x.set(-width);
        toggle();
      }
    }
  };

  return (
    <S.Container
      // Disable events if it's not a mobile version
      // Pass outer container width in case we are on mobile, puts slide action in jeopardy
      width={isMobile ? 10 : 170}
      onPan={isMobile ? handleOnPan : undefined}
      onPanEnd={isMobile ? handleOnPanEnd : undefined}
    >
      {/* <SideBarAction

      /> */}
      {isMobile ? (
        <HamburgerButton x={x} width={width} isOpen={isOpen} toggle={toggle} />
      ) : (
        <Headline />
      )}
      {/* Animated Container */}

      <S.SidebarContainer
        width={width}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 40,
        }}
        // Because this function runs only on first render, it creates an issue in SSR
        initial={isMobile ? { x: -width } : { x: 0 }}
        style={{ x }}
      >
        {/* Side Bar Navigation Links */}
        <S.ChildrenContainer>
          {navigation.map((navElem) => (
            <Box key={navElem.label} top={2.5}>
              <Flex direction="row">
                <Icon icon={navElem.Icon} all={0.3} />
                <StyledNavLink href={navElem.href} label={navElem.label} />
              </Flex>
            </Box>
          ))}
        </S.ChildrenContainer>
      </S.SidebarContainer>
    </S.Container>
  );
};

// These props don't make sense, but I'd like to get rid of this context provider anyway,
// and use some other way to deal with the svgs
type IconProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
};

// ToDo Better svg handling.
function Icon({ icon, ...props }: IconProps) {
  return (
    <IconContext.Provider value={{ color: '#696969', size: '1.7rem' }}>
      <Box {...props}>{icon}</Box>
    </IconContext.Provider>
  );
}

type HamburgerProps = {
  // [x: string]: any
  x: MotionValue<number>;
  width: number;
  isOpen: boolean;
  toggle: () => void;
};

const HamburgerButton = ({ x, width, isOpen, toggle }: HamburgerProps) => {
  return (
    <S.HamburgerContainer
      onTap={() => {
        toggle();
        isOpen ? x.set(-width) : x.set(0);
      }}
    >
      <S.Line width={16} />
      <S.Line width={16} />
    </S.HamburgerContainer>
  );
};

const Headline = () => {
  return (
    <S.LogoContainer>
      <Headline4 marginBottom={10} textAlign="center">
        Peak <br />
        Productivity
      </Headline4>
    </S.LogoContainer>
  );
};
