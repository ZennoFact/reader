// TODO: このファイルは将来的に内容のアップデートをするためのもの
'use strict';
var request = require('request');
// var http = require('http');
// const url = 'http://users2.kyoto-kcg.ac.jp/~tc10162/reader/checkupdate.php';
// const url = 'localhost/reapp/checkupdate.php';


var updateUtil = {
  checkUpdate: function(date) {
    request.post(
      url, {
        form: {
          date: date
        }
      },
      function(err, res, body) {
        if (!err && res.statusCode == 200) {
          return "success" + body;
        } else {
          return "error" + body;
        }
      }
    );

    // http.get(url, function(res) {
    //   var data = '';
    //   res.setEncoding('utf8');
    //   res.on('data', function(chunk) {
    //     data += chunk;
    //   });
    //
    //   res.on('end', function() {
    //     return data;
    //   });
    //
    // }).on('error', function(e) {
    //   return e.message;
    // });
  },
  update: function() {

  }
};

module.exports = updateUtil;
