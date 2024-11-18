const path = require('path')

const dirSrc = path.join(__dirname, 'src')
const rootDir = path.join(__dirname, '.build')
console.log(rootDir)

module.exports = () => {
  return {
    entry: {
      app: path.join(dirSrc, 'app'),
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: 'sass-loader',
              options: {
                additionalData: `$rootDir: ${rootDir};`,
              },
            },
          ],
        },
      ],
    },
  }
}
