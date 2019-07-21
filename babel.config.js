module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/env"];
  const plugins = ['./plugins/remove-console-log'];

  return {
    presets,
    plugins
  };
}
