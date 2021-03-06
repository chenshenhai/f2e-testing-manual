const path = require('path');
const babelConfig = require('./babel.config');

const srcResolve = function (file) {
  return path.join(__dirname, '..', 'src', file);
};

const distResolve = function (file) {
  return path.join(__dirname, '..', 'dist', file);
};

module.exports = {
  entry: {
    'index': srcResolve('index.jsx'),
  },
  output: {
    path: distResolve(''),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      },
    ]
  },
};