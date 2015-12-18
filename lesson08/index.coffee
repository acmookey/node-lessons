express = require 'express'

fibonacci = (n)->
  if isNaN n
    throw new Error 'n should be a Number'
  if n < 0
    throw new Error 'n should > 0'
  if n > 10
    throw new Error 'n should <= 10'
  if n is 0 or n is 1
    return n
  fibonacci(n-1)+fibonacci(n-2)

# if require.main is module
#   n = Number process.argv[2]
#   console.log 'fibonacci(' + n + ') is',fibonacci n

app = express()
app.get '/fib',(req,res)->
  n = Number req.query.n
  try
    res.send String fibonacci n
  catch e
    res
      .status 500
      .send e.message

module.exports = app

app.listen 3000,->
  console.log 'app is running at port 3000'
