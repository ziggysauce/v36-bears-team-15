import { Story, Meta } from '@storybook/react';

import Header from '.';

export default {
  component: Header,
  title: 'Header',
} as Meta;

export const Basic: Story = () => <Header />;
