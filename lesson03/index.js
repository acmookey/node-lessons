var app, cheerio, express, superagent;

express = require('express');

superagent = require('superagent');

cheerio = require('cheerio');

app = express();

app.get('/', function(req, res, next) {
  return superagent.get('https://cnodejs.org/').end(function(err, sres) {
    var $, items;
    if (err) {
      next(err);
    }
    $ = cheerio.load(sres.text);
    items = [];
    $('#topic_list .topic_title').each(function(idx, e) {
      var $e;
      $e = $(e);
      return items.push({
        title: $e.attr('title'),
        href: $e.attr('href')
      });
    });
    return res.send(items);
  });
});

app.listen(3000, function() {
  return console.log('app is running at port 3000.');
});
