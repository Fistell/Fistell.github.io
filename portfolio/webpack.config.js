const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  //   output: {
  //     path: path.resolve(__dirname, "./build"),
  //     filename: "scripts/[name].js",
  //     publicPath: "/",
  //   },
  //   devtool: "eval-source-map",
  devServer: {
    contentBase: "dist",
    historyApiFallback: {
      index: "/",
    },
    port: 8081,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    // new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: paths.public,
    //       to: 'assets',
    //       globOptions: {
    //         ignore: ['*.DS_Store'],
    //       },
    //       noErrorOnMissing: true,
    //     },
    //   ],
    // }),
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};

module.exports = config;
