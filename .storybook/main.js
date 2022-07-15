module.exports = {
  stories: ['../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook-zeplin/register',
      '@storybook/addon-a11y',
  ],
  framework: '@storybook/angular',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    interactionsDebugger: true,
  },
};

// .storybook/main.js

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    // Other Storybook addons
    '@storybook/addon-a11y', //👈 The a11y addon goes here
  ],
};

