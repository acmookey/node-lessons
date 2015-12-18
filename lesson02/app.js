var express, md5, start;

express = require("express");

md5 = require("md5");

start = function() {
  var app;
  app = express();
  app.get('/', function(req, res) {
    var md5Value, q;
    q = req.query.q;
    md5Value = md5(q);
    return res.send(md5Value);
  });
  return app.listen(3000, function(req, res) {
    return console.log('app is running at port 3000');
  });
};

exports.start = start;
