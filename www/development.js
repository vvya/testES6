var thinkjs = require('thinkjs');
var path = require('path');

var rootPath = path.dirname(__dirname);

var instance = new thinkjs({
  APP_PATH: rootPath + '/app',
  RUNTIME_PATH:rootPath + "runtime",//添加 RUNTIME_PATH 路径的定义
  ROOT_PATH: rootPath,
  RESOURCE_PATH: __dirname,
  env: 'development'
});



instance.run();