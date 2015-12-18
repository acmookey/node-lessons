var app, express, fibonacci;

express = require('express');

fibonacci = function(n) {
  if (isNaN(n)) {
    throw new Error('n should be a Number');
  }
  if (n < 0) {
    throw new Error('n should > 0');
  }
  if (n > 10) {
    throw new Error('n should <= 10');
  }
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

app = express();

app.get('/fib', function(req, res) {
  var e, n;
  n = Number(req.query.n);
  try {
    return res.send(String(fibonacci(n)));
  } catch (_error) {
    e = _error;
    return res.status(500).send(e.message);
  }
});

module.exports = app;

app.listen(3000, function() {
  return console.log('app is running at port 3000');
});
