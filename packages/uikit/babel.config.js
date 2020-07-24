const path = require("path");

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@uikit": path.join(__dirname, "src"),
        },
      },
    ],
  ],
};
