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
