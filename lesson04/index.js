var cheerio, cnodeUrl, eventproxy, superagent, url;

eventproxy = require('eventproxy');

superagent = require('superagent');

cheerio = require('cheerio');

url = require('url');

cnodeUrl = 'https://cnodejs.org/';

superagent.get(cnodeUrl).end(function(err, res) {
  var $, ep, topicUrls;
  if (err) {
    console.error(err);
  }
  topicUrls = [];
  $ = cheerio.load(res.text);
  $('#topic_list .topic_title').each(function(idx, e) {
    var $e, href;
    $e = $(e);
    href = url.resolve(cnodeUrl, $e.attr('href'));
    return topicUrls.push(href);
  });
  ep = new eventproxy();
  ep.after('topic_html', topicUrls.length, function(topics) {
    topics = topics.map(function(topicPair) {
      var topicHtml, topicUrl;
      topicUrl = topicPair[0];
      topicHtml = topicPair[1];
      $ = cheerio.load(topicHtml);
      return {
        title: $('.tpoic_full_title').text().trim(),
        href: topicUrl,
        comment1: $('.reply_content').eq(0).text().trim()
      };
    });
    console.log('final:');
    return console.log(topics);
  });
  topicUrls.forEach(function(topicUrl) {
    superagent.get(topicUrl).end(function(err, res) {
      console.log('fetch ' + topicUrl + ' successful');
      ep.emit('topic_html', [topicUrl, res.text]);
    });
  });
});
