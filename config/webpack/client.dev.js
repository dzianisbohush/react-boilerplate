const commonConfig = require('./common');
const paths = require('../paths');
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon');


const config = {
  ...commonConfig,
  target: 'web',
  mode: 'development',
  entry: `${paths.srcClient}/index.js`,
  output: {
    // path: paths.clientBuild,
    // filename: 'bundle-client.js',

    publicPath: '/build/client/',
    filename: '[name].js', // name for file with common logic
    chunkFilename: '[name].chunk.js', // name for logic chunks
    path: paths.clientBuild,
  },
  devServer: {
    contentBase: paths.clientBuild,
    port: process.env.PORT || 4000
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          minChunks: 2,
        },
        default: {
          minChunks: 2,
          reuseExistingChunk: true,
        },
      },
    },
  },
};

module.exports = config;
