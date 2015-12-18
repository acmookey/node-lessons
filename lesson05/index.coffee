async = require 'async'

concurrencyCount = 0
fetchUrl = (url,callback)->
  delay = parseInt (Math.random()*10000000)%2000,10
  concurrencyCount++
  console.log '现在的并发数是',concurrencyCount,',正在抓取的是',url,',耗时',delay+'毫秒'
  setTimeout ->
      concurrencyCount--
      callback null,url+' html content'
    ,delay

urls = []
for i in [0...30]
  urls.push 'http://datasource_'+i

async.mapLimit urls,5,(url,callback)->
    fetchUrl url,callback
  ,(err,result)->
    console.log 'final:'
    console.log  result
