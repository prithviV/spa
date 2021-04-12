module.exports = {
  lintOnSave: false,
  configureWebpack: {
    externals: ["vue", "vue-router", /^@test-mfa\/.+/],
  },
  filenameHashing: false,
};
