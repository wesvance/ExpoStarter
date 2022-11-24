module.exports = {
  '*.{ts,tsx}': [() => 'tsc --noEmit', 'eslint --cache --fix', 'prettier --write']
}
