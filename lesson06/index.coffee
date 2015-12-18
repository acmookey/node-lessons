fibonacci = (n)->
  if n is 0 or n is 1
    return n
  if isNaN(n) or n < 0 or n >10
    return 'illegal call'
  fibonacci(n-1)+fibonacci(n-2)

if require.main is module
  n = Number process.argv[2]
  console.log 'fibonacci(' + n + ') is',fibonacci n

exports.fibonacci = fibonacci
