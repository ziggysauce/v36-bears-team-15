import { render, screen } from '../../lib/test-utils';

import Footer from '.';

describe('<Footer />', () => {
  it('should render the heading', () => {
    render(<Footer />);

    expect(
      screen.getByRole('heading', { name: /Footer/i }),
    ).toBeInTheDocument();
  });
});
