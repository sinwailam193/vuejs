// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    "quotes": [2, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "space-before-function-paren": ["error", { "anonymous": "always", "named": "never" }],
    "arrow-body-style": ["error", "as-needed"],
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "no-trailing-spaces": "error",
    "space-in-parens": ["error", "never"],
    "indent": ["error", 4],
    "max-len": ["error", 200, 4],
    "arrow-parens": 0,
    "comma-dangle": 0,
    "no-plusplus": 0,
    "import/prefer-default-export": 0,
    "global-require": 0,
    "class-methods-use-this": 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
