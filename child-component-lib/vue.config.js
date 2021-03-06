const webpack = require("webpack");

module.exports = {
  pluginOptions: {},
  transpileDependencies: [],
  configureWebpack: {
    devtool: "source-map",
    externals: {
      "@vue/composition-api": "@vue/composition-api",
      "vuex-composition-helpers": "vuex-composition-helpers"
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  }

  // chainWebpack: config => {
  //   // These are some necessary steps changing the default webpack config of the Vue CLI
  //   // that need to be changed in order for Typescript based components to generate their
  //   // declaration (.d.ts) files.
  //   //
  //   // Discussed here https://github.com/vuejs/vue-cli/issues/1081
  //   // if (process.env.NODE_ENV === 'production') {
  //   config.module.rule("ts").uses.delete("cache-loader");
  //   config.module
  //     .rule("ts")
  //     .use("ts-loader")
  //     .loader("ts-loader")
  //     .tap(options => ({
  //       ...options,
  //       transpileOnly: false,
  //       happyPackMode: false
  //     }));
  //   // }
  // },
  // // These are some necessary steps changing the default webpack config of the Vue CLI
  // // that need to be changed in order for Typescript based components to generate their
  // // declaration (.d.ts) files.
  // //
  // // Discussed here https://github.com/vuejs/vue-cli/issues/1081
  // parallel: false
};
