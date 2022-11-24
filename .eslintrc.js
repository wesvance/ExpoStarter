module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'react-hooks', 'react-native'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
    'plugin:react/recommended', // uses react-specific linting rules
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react', // disables react-specific linting rules that conflict with prettier
    'plugin:prettier/recommended', // uses react-specific linting rules
    'plugin:storybook/recommended'
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
    'react-native/react-native': true
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 'warn',
    'react/no-unescaped-entities': [2, { forbid: ['>', '}'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'error',
    'global-require': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.stories.tsx',
          '**/testing/**',
          './app.config.ts'
        ]
      }
    ],
    'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // Allow dongle in the case of the theme to show the state of the calcualted theme
    'no-underscore-dangle': ['error', { allow: ['_state'] }]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
}
