module.exports = {
  stories: ['../wiki/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    'storybook-addon-designs'
  ],
  framework: '@storybook/react'
}
