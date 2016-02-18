'use strict';

var glob = require('glob');
var path = require('path');
var fs = require('fs');

// var json = '[{"title": "About","path": "welcom.md","tag1": "howto","tag2": "","tag3": ""},{"title": "HTML","path": "html.md","tag1": "web","tag2": "frontend","tag3": "markup"},{"title": "PHP","path": "php.md","tag1": "web","tag2": "serverside","tag3": ""}, {"title": "JavaScript","path": "js.md","tag1": "web","tag2": "frontend","tag3": "program"}]';
var json = fs.readFileSync("./data/data.json");
var list = JSON.parse(json);

var fileUtil = {
  fetchContentList: function (baseDir, cb) {
    console.log(list);
    cb(list.map(function(elem) {
      return {
        filepath: path.join(baseDir, elem.path),
        title: elem.title
      };
    }));
  },
  getAsText: function(filename) {
    return fs.readFileSync(filename, 'utf-8');
  },
  getFileStat: function(filename) {
    return fs.statSync(filename);
  }
};

module.exports = fileUtil;
