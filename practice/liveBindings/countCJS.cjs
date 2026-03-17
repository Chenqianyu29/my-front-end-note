let count = 0;

function increment() {
  return count++;
}

function getCount() {
  return count;
}

module.exports = {
  count,
  increment,
  getCount,
};
