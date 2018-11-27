const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "../src/nodeuii/**/*.ts"),
  target:'node',
  output: {
    filename: "server.[hash:5].js"
  },
  module: {
    rules: [
      {
        test: /.\ts$/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  }
};
