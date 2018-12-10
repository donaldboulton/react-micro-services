const webpack = require('webpack'); 

const path = require('path');

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  node: {
    fs: 'empty',
    tls: 'empty',
    net: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "react",
              [
                  "env",
                  {
                      "targets": {
                          "browsers": ["last 2 versions"]
                      },
                      "debug": true,
                      "modules": "commonjs"
                  }
              ]
          ],
          plugins: ["transform-object-rest-spread", "transform-class-properties", "transform-react-jsx"]
          },
        },
      },

    ],
  },
};