const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? 'cheap-source-map' : 'inline-source-map';

const cssModuleRegex = /\.module\.scss$/;

module.exports = {
  mode,
  devtool,
  //context: path.resolve(__dirname, 'src'),
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)?$/,
        use: 'ts-loader',
        exclude: [
          '/node_modules/',
          '/\.test.(ts|tsx|js)?$/'
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: cssModuleRegex,
        loaders: [
          'style-loader',
          { 
            loader: 'css-loader', 
            options: { 
              importLoaders: 1, 
              modules: { mode: "local", localIdentName: "[path][name]__[local]--[hash:base64:5]" }
              //modules: true,
            } 
          }, 
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(scss|css)$/,
        exclude: cssModuleRegex,
        loaders: [
          'style-loader', 
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          {
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
                //outputPath: path.resolve(__dirname, 'dist'),
                //publicPath: '/',
            }
          },
          //'file-loader?hash=sha512&digest=hex&name=/assets/images/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },
  devServer: { 
    port: 4000,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    new webpack.HotModuleReplacementPlugin({}),
    new webpack.NamedModulesPlugin(),
  ],
};
