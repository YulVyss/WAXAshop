//basic vars
const path = require('path');
const webpack = require('webpack');

//plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { env } = require('process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    app: [
      "./js/index.js",
    ],
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '../'
  },
  // watch: true,
  devtool: "source-map",
  mode: env.production ? 'production' : 'development',
  //devserver config
  devServer: {
    contentBase: './dist',
    port: 3000,
  },
  plugins: [
    // Styles
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    // Generating HTML
    new HtmlWebpackPlugin({ template: 'pug/index.pug', filename: '../dist/index.html' }),
    new HtmlWebpackPugPlugin({
      adjustIndent: true
    }),
    new CleanWebpackPlugin(),
    // other files
    new CopyWebpackPlugin({
      patterns: [
        { from: "../src/img", to: "../dist/img" },
        { from: "../src/fonts", to: "../dist/fonts" },
      ],
    }),
  ],
  module: {
    rules: [
      // HTML
      {
        test: /\.(pug|jade)$/,
        loader: 'pug-loader'
      },
      //scss
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              sourceMap: true,
              url: false
            }
          },          
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // includePath: [path.resolve(__dirname, 'src/scss/_settings')],
            },
          },
        ],
      },
    ],
  },
}

