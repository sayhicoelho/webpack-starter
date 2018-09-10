const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')
const chalk = require('chalk')

webpack(webpackConfig, (err, stats) => {
  if (stats.hasErrors()) {
    console.log(chalk.red('Build failed with errors.\n'))
    process.exit(1)
  }

  console.log(chalk.cyan('Build complete.\n'))
})
