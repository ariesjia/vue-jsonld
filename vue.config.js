const path = require('path')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true,
          }
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.vue', '.json']
    }
  }
};