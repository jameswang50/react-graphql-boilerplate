const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const outputPath = path.resolve(__dirname, './static');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [new webpack.NamedModulesPlugin()],
  devServer: {
    contentBase: outputPath,
    port: 3000,
    historyApiFallback: true,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false,
    disableHostCheck: true
  }
});
