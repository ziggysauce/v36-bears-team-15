import { render } from '../../lib/test-utils';

import { Navigation } from '.';

describe('<Sidebar />', () => {
  const isMobile = false;
  const isXLarge = false;
  const isOpen = false;
  const toggle = () => {
    console.log(`I'm not an unexpected empty function.`);
  };

  it('should be truthy', () => {
    const { baseElement } = render(
      <Navigation
        isMobile={isMobile}
        isXLarge={isXLarge}
        isOpen={isOpen}
        toggle={toggle}
      />,
    );

    expect(baseElement).toBeTruthy();
  });
});
