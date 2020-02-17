function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = { getRandomInRange, getRandomArbitrary };
