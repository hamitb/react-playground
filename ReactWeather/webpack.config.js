var path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, "app", "components"), "node_modules"],
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: ['react', 'es2015'],
          plugins: [
            ["transform-object-rest-spread"],
          ],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};