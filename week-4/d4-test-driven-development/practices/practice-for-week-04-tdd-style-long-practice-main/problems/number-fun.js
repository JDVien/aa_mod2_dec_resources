function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {

  if (n < 1 || n > 1000000) {
    throw new TypeError('this is an error');

  }
  return 1 / n;
}

console.log(reciprocal(0))


module.exports = {
  returnsThree,
  reciprocal
};
