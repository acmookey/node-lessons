var async, concurrencyCount, fetchUrl, i, j, urls;

async = require('async');

concurrencyCount = 0;

fetchUrl = function(url, callback) {
  var delay;
  delay = parseInt((Math.random() * 10000000) % 2000, 10);
  concurrencyCount++;
  console.log('现在的并发数是', concurrencyCount, ',正在抓取的是', url, ',耗时', delay + '毫秒');
  return setTimeout(function() {
    concurrencyCount--;
    return callback(null, url + ' html content');
  }, delay);
};

urls = [];

for (i = j = 0; j < 30; i = ++j) {
  urls.push('http://datasource_' + i);
}

async.mapLimit(urls, 5, function(url, callback) {
  return fetchUrl(url, callback);
}, function(err, result) {
  console.log('final:');
  return console.log(result);
});
