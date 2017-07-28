var Generator = require('yeoman-generator');
module.exports = class extends Generator {
  init() {
    this.log('Generating GraphQL Schema');
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

  }
};
