const path = require('path')
// Required for expo-constants and other expo packages to work
const { withUnimodules } = require('@expo/webpack-config/addons')

module.exports = ({ config }) => {
  config.resolve.modules = [path.resolve(__dirname, '..', 'src'), 'node_modules']
  config.resolve.alias = { 'react-native': 'react-native-web' }
  const wUni = withUnimodules(config, {
    projectRoot: path.resolve(__dirname, '../')
  })

  // Needed when using expo: https://github.com/storybookjs/storybook/issues/11694#issuecomment-667466157
  wUni.output.publicPath = ''
  return wUni
}
