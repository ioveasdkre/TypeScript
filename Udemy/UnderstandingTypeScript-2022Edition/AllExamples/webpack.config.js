const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// node.js語法
module.exports = {
  mode: "development", // 開發環境
  devServer: {
    port: 9000,
  },
  // 入口
  entry:
    "./src/EP11_UsingWebpackWithTypeScript/155.AddingEntryAndOutputConfiguration/app.ts",
  // 輸出
  output: {
    filename: "bundle.js", // 編譯檔案名稱
    path: path.resolve(__dirname, "dist"), // 編譯檔案的位置 絕對路徑
    publicPath: "dist", // 默認路徑
  },
  devtool: "inline-source-map", // 設定來源
  // 模塊處理
  module: {
    // 設定規則
    rules: [
      {
        test: /\.ts$/, // 編譯所有 .ts
        use: "ts-loader", // 規則使用
        exclude: /node_modules/, // 排除條件
      },
    ],
  },
  // 模塊的解析方式
  resolve: {
    extensions: [".ts", ".js"], // 解析副檔名(import) 由左至右的優先順序
  },
  // 第三方套件
  plugins: [
    new HtmlWebpackPlugin({
      title: "首頁",
      template: "EP11_index.html",
    }),
  ],
};
