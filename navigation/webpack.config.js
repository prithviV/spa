const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    // The name of the organization this application is written for
    orgName: 'beautiful',
    // The name of the current project. This usually matches the git repo's name
    projectName: 'navigation',
    // See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv
    webpackConfigEnv,
    // The CLI commands in the package.json script that triggered this build
    argv,
  });

  return merge(defaultConfig, {
    externals: [/^@vue-mf\/.+/],
    // modify the webpack config however you'd like to by adding to this object
  });
};