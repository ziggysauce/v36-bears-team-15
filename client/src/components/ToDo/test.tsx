import { render, screen } from '@testing-library/react';

import ToDo from '.';

describe('<ToDo />', () => {
  it('should render the to-do page', () => {
    render(<ToDo />);

    expect(screen.getByRole('heading', { name: /To-Do/i })).toBeInTheDocument();
  });
});
