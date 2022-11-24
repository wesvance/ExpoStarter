module.exports = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  tabWidth: 2,
  printWidth: 100,

  // import order https://github.com/trivago/prettier-plugin-sort-imports
  // third party modules are automatically moved to the top
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^pages/(.*)$',
    '^components/(.*)$',
    '^styles/(.*)$',
    '^contexts/(.*)$',
    '^hooks/(.*)$',
    '^utils/(.*)$',
    '^[./]'
  ],
  importOrderSortSpecifiers: true,
  importOrderSeparation: true,
  overrides: [
    // Overrides for local json
    {
      files: ['**/package.json', '**/locales/**/*.json', '.github/**/*.yml'],
      options: {
        useTabs: false,
        tabWidth: 2
      }
    }
  ]
}
