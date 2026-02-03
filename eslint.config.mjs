import config from '@whoisfreire/eslint-config/node.mjs'

export default [
  ...config,
  {
    rules: {
      'no-undef': 'off'
    }
  }
]
