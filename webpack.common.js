const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
        'style-loader', //3. Inject styles into DOM
        'css-loader',   //2. Turns css into common js
        'sass-loader',   //1. Turns sass into css
        ]
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },   
    ]
  }
};