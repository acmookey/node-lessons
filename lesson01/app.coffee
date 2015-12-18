express = require "express"

app = express()

start = ->
  app.get '/',(req,res)->
    res.send 'hello world'

  app.listen 3000,->
    console.log 'app is listening at port 3000'

exports.start = start
