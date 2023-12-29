module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.css$/, // Regular expression to match all .css files
          use: ['style-loader', 'css-loader'] // Use these loaders for CSS files
        }
      ]
    }
  };