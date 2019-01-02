/*eslint-env node*/
module.exports = {
  presets: ['@babel/react', '@babel/env'],
  plugins: [
    'emotion',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    ['@babel/plugin-transform-runtime', {polyfill: false, regenerator: true}],
    // NOTE: The order of the decorator and class-property plugins is important
    // here. Decorators must be processed first before class properties, see:
    // https://babeljs.io/docs/en/plugins#plugin-ordering
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['babel-plugin-transform-builtin-extend', {globals: ['Array', 'Error']}],
  ],
};
