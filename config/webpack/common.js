const paths = require('../paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              // the plugin need for working with dynamic imports
              '@babel/plugin-syntax-dynamic-import',
              // the plugin need for working with react-loadable library
              'react-loadable/babel',
            ],
          }
        }
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    alias: {
      "@ant-design/icons/lib/dist$": paths.antIcons,
      src: paths.src
    },
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new HtmlWebpackPlugin({
      template: `${paths.publicFolder}/index.html`,
      favicon: `${paths.publicFolder}/favicon.ico`,
    }),
    // new ManifestPlugin({ fileName: 'manifest.json' }),
    // the plugin need for creating chunks scheme
    new ReactLoadableSSRAddon({
      filename: 'react-loadable-ssr-addon.json',
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
  ]
};

module.exports = config;
