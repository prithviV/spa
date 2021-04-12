const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "test-mfa",
    projectName: "navbar",
    webpackConfigEnv,
  });

  return merge(defaultConfig, {
    externals: [/^@test-mfa\/.+/],
    // customizations can go here
  });
};
