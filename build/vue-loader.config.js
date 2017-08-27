module.exports = {
  extractCSS: process.env.NODE_ENV === 'production',
  preserveWhitespace: false,
  postcss: [require("postcss-smart-import"), require("precss"), require("autoprefixer")]
}
