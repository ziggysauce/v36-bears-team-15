import { render } from '@testing-library/react';

import Sidebar from '.';

describe('<Sidebar />', () => {
  it('should render the heading', () => {
    const { baseElement } = render(<Sidebar />);

    expect(baseElement).toBeTruthy();
  });
});
