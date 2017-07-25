var Generator = require('yeoman-generator');
module.exports = class extends Generator {
  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/index.js'),
      { title: 'Generate console logs!' }
    );
  }
};
