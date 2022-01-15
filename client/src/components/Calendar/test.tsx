import { render, screen } from '@testing-library/react';

import Calendar from '.';

describe('<Calendar />', () => {
  it('should render the calendar page', () => {
    render(<Calendar />);

    expect(screen.getByText('Calendar')).toBeInTheDocument();
  });
});
