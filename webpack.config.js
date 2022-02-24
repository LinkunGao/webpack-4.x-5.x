const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin"); // 引入压缩插件
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "index.html",
});

// const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  devtool: "source-map",
  // 编译模式
  mode: "development", //development production
  entry: {
    abi: "./src/index.js",
    "abi.min": "./src/index.js",
  },
  // output: {
  //   path: path.join(__dirname, "./dist"), // 输出文件的存放路径
  //   filename: "bundle.js", //输出文件的名称
  // },
  output: {
    filename: "[name].js",
    library: "abi",
    libraryExport: "default", // 不添加的话引用的时候需要 tools.default
    libraryTarget: "umd", // var this window ...
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 使用压缩插件
        include: /\.min\.js$/,
      }),
    ],
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
    ],
  },
};
