const { injectBabelPlugin } = require("react-app-rewired");
const rewireAliases = require("react-app-rewire-aliases");
const { paths } = require("react-app-rewired");
const path = require("path");

const override = (config, env) => {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
    config
  );
  config = rewireAliases.aliasesOptions({
    "@components": path.resolve(__dirname, `${paths.appSrc}/components/`),
    "@mockData": path.resolve(__dirname, `${paths.appSrc}/mockData/`)
  })(config, env);
  return config;
};

module.exports = override;
