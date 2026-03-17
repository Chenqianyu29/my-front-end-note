const { increment, getCount } = require("./countCJS.cjs");

console.log(getCount());

increment();
console.log(getCount());

increment();
console.log(getCount());
