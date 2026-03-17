function partialFun(fn, ...preset) {
  return function (...rest) {
    return fn.call(this, ...preset, ...rest);
  };
}

let user = {
  name: "max",
  say(time, phrase) {
    console.log(`[${time}] ${this.name}: ${phrase}!`);
  },
};

user.sayHello = partialFun(
  user.say,
  new Date().getHours() +
    ":" +
    new Date().getMinutes().toString().padStart(2, "0"),
);

user.sayHello("hello");

// const arr = [1, 2, 3];
// arr.name = "array";

// for (let key of arr.keys()) {
//   console.log(key); // 0, 1, 2, name
// }

// for (let value of arr) {
//   console.log(value); // 1, 2, 3
// }
