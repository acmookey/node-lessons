var fibonacci, n;

fibonacci = function(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (isNaN(n) || n < 0 || n > 10) {
    return 'illegal call';
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

if (require.main === module) {
  n = Number(process.argv[2]);
  console.log('fibonacci(' + n + ') is', fibonacci(n));
}

exports.fibonacci = fibonacci;
