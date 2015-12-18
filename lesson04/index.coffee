eventproxy = require 'eventproxy'
superagent = require 'superagent'
cheerio = require 'cheerio'

url = require 'url'

cnodeUrl = 'https://cnodejs.org/'

superagent.get cnodeUrl
  .end (err,res)->
    if err
      console.error err

    topicUrls = []
    $ = cheerio.load res.text

    $ '#topic_list .topic_title'
      .each (idx,e)->
        $e = $ e
        href = url.resolve cnodeUrl,$e.attr 'href'
        topicUrls.push href

    # console.log topicUrls

    ep = new eventproxy()
    ep.after 'topic_html',topicUrls.length,(topics)->
      topics = topics.map (topicPair)->
        topicUrl = topicPair[0]
        topicHtml = topicPair[1]
        $ = cheerio.load topicHtml
        ({
          title: $('.tpoic_full_title').text().trim()
          href : topicUrl
          comment1 : $('.reply_content').eq(0).text().trim()
        })
      console.log 'final:'
      console.log topics

    topicUrls.forEach (topicUrl)->
      superagent.get topicUrl
        .end (err,res)->
          console.log 'fetch '+topicUrl+' successful'
          ep.emit 'topic_html',[topicUrl,res.text]
          return
      return
    return
