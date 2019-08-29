const webpackNodeExternals = require('webpack-node-externals');

const paths = require('../paths');

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

      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
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
  target: 'node',
  mode: 'production',
  entry: `${paths.srcServer}/index.js`,
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: paths.serverBuild
  },
  externals: [webpackNodeExternals()],
};

module.exports = config;
