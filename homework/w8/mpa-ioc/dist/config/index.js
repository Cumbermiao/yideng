const path = require("path");

let config = {
  port: 8080,
  staticDir: path.resolve(__dirname, '../assets'),
  viewDir: path.resolve(__dirname, '../views')
};

if (process.env.NODE_ENV === 'production') {
  config.port = 8081;
}

if (process.env.NODE_ENV === 'development') {
  config.port = 3000;
}

if (false) {
  console.log('false');
}

module.exports = config;