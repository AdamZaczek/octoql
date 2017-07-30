import configFile from './configFile.js';
const { spawn } = require('child_process');

//console.log(configFile);

const getFields = spawn('babel-node configFile.js')
console.log(getFields)
