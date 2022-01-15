import { render, screen } from '@testing-library/react';

import Note from '.';

describe('<Note />', () => {
  it('should render the note page', () => {
    render(<Note />);

    expect(screen.getByRole('heading', { name: /Note/i })).toBeInTheDocument();
  });
});
