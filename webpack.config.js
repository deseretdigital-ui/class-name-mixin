var webpack = require('webpack');

module.exports = {
  output: {
    filename: 'ClassNameMixin.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    },
    "react/addons": {
      root: "React",
      commonjs: "react/addons",
      commonjs2: "react/addons",
      amd: "react/addons"
    }
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
