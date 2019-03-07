const pluginName = 'HelloWorldPlugin';
const chalk = require('chalk');

class HelloWorldPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    console.info(this.options)
    console.log(chalk.bgMagenta(chalk.black(JSON.stringify(this.options))))
    // development模式下,下面的代码不会运行
    compiler.hooks.run.tap(pluginName, compilation => {
      console.info(compilation)
      console.log(chalk.bgMagenta(chalk.white('webpack 构建开始')))
    })
  }
}
module.exports = HelloWorldPlugin;
