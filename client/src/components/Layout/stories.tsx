import { Story, Meta } from '@storybook/react';

import Layout from '.';

export default {
  component: Layout,
  title: 'Layout',
} as Meta;

export const Basic: Story = () => <Layout />;
