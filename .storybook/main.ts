import type { StorybookConfig } from '@storybook/react-vite';
import { storybookOnlookPlugin } from '@onlook/storybook-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  plugins: [storybookOnlookPlugin()],
};

export default config;
