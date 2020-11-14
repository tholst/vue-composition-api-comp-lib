const webpack = require("webpack");

module.exports = {
  pluginOptions: {},
  transpileDependencies: [],
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },

};
