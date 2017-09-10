const chalk = require('chalk');
const mkdirp = require('mkdirp');

var Generator = require('yeoman-generator');
module.exports = class extends Generator {
  init() {
    // console.log(this.options);
    // console.log(this.destinationRoot());
    this.spawnCommand('node ')
  }
}
