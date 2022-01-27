import { render } from '../../lib/test-utils';

import Sidebar from '.';

describe('<Sidebar />', () => {
  it('should be truthy', () => {
    const { baseElement } = render(<Sidebar />);

    expect(baseElement).toBeTruthy();
  });
});
