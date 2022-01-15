import { render, screen } from '@testing-library/react';

import StyledLink from '.';

describe('<StyledLink />', () => {
  test("should navigate to '/' when link is clicked", () => {
    render(<StyledLink href="/" label="Test Link" />);

    expect(
      screen.getByRole('link', { name: /Test Link/i }),
    ).toBeInTheDocument();

    expect(screen.getByText('Test Link').closest('a')).toHaveAttribute(
      'href',
      '/',
    );
  });
});
