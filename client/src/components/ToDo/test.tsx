import { render, screen } from '../../lib/test-utils';

import ToDo from '.';

describe('<ToDo />', () => {
  it('should render the to-do page', () => {
    render(<ToDo />);

    expect(screen.getByRole('heading', { name: /To-Do/i })).toBeInTheDocument();
  });
});
