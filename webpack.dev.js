/* eslint-disable import/extensions */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
});
