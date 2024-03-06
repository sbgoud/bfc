const path = require('path');

module.exports = {
  mode: 'development', // Or 'production' for a final build
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/, // Target image types
        type: 'asset/resource'
      }
    ]
  }
};
