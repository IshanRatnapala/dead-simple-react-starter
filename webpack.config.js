var path = require('path')

module.exports = {
  entry: './app/app.jsx',
  devtool: "cheap-eval-source-map",
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "public"),
    publicPath: 'public'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}