function reverseString(string) {
  if (typeof string !== 'string') throw Error('this is not a string');

  let newStr = string.split("")
  return newStr.reverse().join('');
};

// reverseString(4);
console.log(reverseString('hello world'))

module.exports = { reverseString };
