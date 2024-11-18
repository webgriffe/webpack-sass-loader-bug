const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const dirPublic = path.join(__dirname, 'dist')

module.exports = () => {
  return merge(common(), {
    mode: 'production',
    output: {
      path: dirPublic,
      publicPath: '/public/',
      filename: '[name].bundle.js',
    },
  })
}
