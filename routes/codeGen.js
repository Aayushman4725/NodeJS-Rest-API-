function generateRandomNumber() {
  var minm = 100000;
  var maxm = 999999;
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}

function generateRandom() {
  let output = generateRandomNumber();
  console.log(output);
}

module.exports = generateRandom;
