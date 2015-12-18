express = require "express"
md5 = require "md5"


start = ->
  app = express()
  app.get '/',(req,res)->
    q = req.query.q;
    md5Value = md5 q
    res.send md5Value

  app.listen 3000,(req,res)->
    console.log 'app is running at port 3000'

exports.start = start
