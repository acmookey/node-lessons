express = require 'express'
superagent = require 'superagent'
cheerio = require 'cheerio'

app = express()

app.get '/',(req,res,next)->
  superagent.get 'https://cnodejs.org/'
    .end (err,sres)->
      if err
        next err
      $ = cheerio.load sres.text
      items = []
      $ '#topic_list .topic_title'
        .each (idx,e)->
          $e = $ e
          items.push
            title : $e.attr 'title'
            href : $e.attr 'href'
      res.send items

app.listen 3000,->
  console.log 'app is running at port 3000.'
