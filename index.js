'use strict';

var remote = require('remote');
var fileUtil = remote.require('./lib/fileUtil');
var baseDir = "./md";

// TODO: この部分はファイルのアップデートをするためのもの現在は未実装
// var updateUtil = remote.require('./lib/updateUtil');
// var jsonData = fileUtil.getFileStat('./data/data.json');
//
//
// console.log(jsonData.mtime);
// console.log(updateUtil.checkUpdate(jsonData.mtime));
// if(updateUtil.checkUpdate(jsonData.mtime)) {
//
// }

var ngModule = angular.module('reapp', []);

ngModule.controller('MainController', function ($scope) {
  var main = this;
  // 初期画面の設定
  main.fileText = fileUtil.getAsText('./md/welcom.md');

  // README.mdの取得
  main.getFile = function(file) {
    main.fileText = fileUtil.getAsText(file.filepath);
  };

  fileUtil.fetchContentList(baseDir, function (fileList) {
    $scope.$apply(function () {
      main.fileList = fileList;
    });
  });
});

ngModule.directive('mdPreview', function () {
  return function ($scope, $elem, $attrs) {
    $scope.$watch($attrs.mdPreview, function(source) {
      $elem.html(marked(source));
    });
  };
});
