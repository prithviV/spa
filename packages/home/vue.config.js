module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      disableHostCheck: true,
      sockHost: "localhost",
    },
    externals: ["vue", "vue-router", /^@test-mfa\/.+/],
  },
  filenameHashing: false,
};
