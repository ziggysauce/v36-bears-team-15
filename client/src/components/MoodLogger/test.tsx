import { render, screen } from '@testing-library/react';

import MoodLogger from '.';

describe('<MoodLogger />', () => {
  it('should render the mood logger page', () => {
    render(<MoodLogger />);

    expect(
      screen.getByRole('heading', { name: /Mood Logger/i }),
    ).toBeInTheDocument();
  });
});
