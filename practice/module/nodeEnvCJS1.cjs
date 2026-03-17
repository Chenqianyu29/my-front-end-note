// 添加属性
exports.add = function (a, b) {
  return a + b;
};

function minus(a, b) {
  return a - b;
}

function hello() {
  console.log("Hello from CommonJS");
}

const a = 1;
const b = 1;

// 直接导出对象
module.exports = {
  add: exports.add,
  hello,
  minus,
  a,
  b,
};
