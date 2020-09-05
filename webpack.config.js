const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');

const common = {
  entry: "./src/index.js",
  output: {
    filename: "index.[hash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: { 
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'index.[hash:8].css',
    }),
    new CopyPlugin([
      { from: path.resolve(__dirname, "assets"), to: path.resolve(__dirname, "dist/assets") },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
};

const developmentConfig = {
  devServer: {
    port: 3000,
    index: "./dist/index.html",
    hotOnly: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};

const productionConfig = {};

module.exports = (env) => {
  return env === "production" ? merge([common, productionConfig]) : merge([common, developmentConfig]);
};