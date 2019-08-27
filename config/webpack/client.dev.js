const commonConfig = require('./common');
const paths = require('../paths');


const config = {
  ...commonConfig,
  mode: 'development',
  entry: `${paths.srcClient}/index.js`,
  output: {
    path: paths.clientBuild
  },
  devServer: {
    contentBase: paths.clientBuild,
    port: process.env.PORT || 4000
  }
};

module.exports = config;
