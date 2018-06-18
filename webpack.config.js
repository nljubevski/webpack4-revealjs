const HtmlWebPackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
          },
          {
            test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            use: 'base64-inline-loader?name=[name].[ext]'
        }
        ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html",
          inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackInlineSourcePlugin(),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
      ]
  };