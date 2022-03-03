module.exports = {
  plugins: [
    require('cssnano'),
    require('stylelint'),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-normalize'),
  ],
};
