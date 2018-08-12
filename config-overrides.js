const { injectBabelPlugin } = require("react-app-rewired");

const override = (config, env) => {
  config = injectBabelPlugin(
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
    config
  );
  return config;
};

module.exports = override;
