import { render, screen } from '../../lib/test-utils';

import Calendar from '.';

describe('<Calendar />', () => {
  it('should render the calendar page', () => {
    render(<Calendar />);

    expect(screen.getByText('Calendar')).toBeInTheDocument();
  });
});
