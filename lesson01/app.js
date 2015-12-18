var app, express, start;

express = require("express");

app = express();

start = function() {
  app.get('/', function(req, res) {
    return res.send('hello world');
  });
  return app.listen(3000, function() {
    return console.log('app is listening at port 3000');
  });
};

exports.start = start;
