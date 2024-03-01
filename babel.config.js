module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      "nativewind/babel",
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          path: ".env",
          moduleName: "@env",
        },
      ],
    ],
    presets: ["babel-preset-expo"],
  };
};
