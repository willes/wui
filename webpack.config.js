const { VueLoaderPlugin } = require('vue-loader')

const path = require('path')
const glob = require('glob')
const list = {}
async function Generator (dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`)
  for (const file of files) {
    const name = file.split(/[/.]/)[1]
    list[name] = `./${file}`
  }
}

Generator('packages', list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, './dist'),
    library: 'wui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {

          loader: 'vue-loader'
        }
      }
    ]
  }
}
