import { Story, Meta } from '@storybook/react';

import Sidebar from '.';

export default {
  component: Sidebar,
  title: 'Sidebar',
} as Meta;

export const Basic: Story = () => <Sidebar />;
