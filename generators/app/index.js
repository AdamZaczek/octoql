const octo = require('./octo');
const chalk = require('chalk');

var Generator = require('yeoman-generator');
module.exports = class extends Generator {
  init() {
    console.log(chalk.magenta(octo));
    this.log(chalk.blue('Generating GraphQL Schema'));
  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('./schema/schema.js'),
      this.destinationPath('./schema/schema.js'),
      { title: 'Generated schema file!' }
    );

    this.fs.copyTpl(
      this.templatePath('./schema/ImType.js'),
      this.destinationPath('./schema/ImType.js'),
      { title: 'Generated schema file!' }
    );

    this.fs.copyTpl(
      this.templatePath('./schema/UserType.js'),
      this.destinationPath('./schema/UserType.js'),
      { title: 'Generated schema file!' }
    );

    this.fs.copyTpl(
      this.templatePath('./schema/MessageType.js'),
      this.destinationPath('./schema/MessageType.js'),
      { title: 'Generated schema file!' }
    );

    this.fs.copyTpl(
      this.templatePath('readConfig.js'),
      this.destinationPath('readConfig.js'),
      { title: 'Generated schema file!' }
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { title: 'Generated package.json!' }
    );

    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc'),
      { title: 'Generated babelrc!' }
    );

    this.spawnCommand('yarn');

  }
};
