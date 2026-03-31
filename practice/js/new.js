function myNew(Construtor, ...args) {
  // 1. 创建一个对象
  const obj = {};
  // 2. 将对象的原型指向Construtor.prototype
  const instance = Object.create(Construtor.prototype);
  // 3. 将Construtor的this指向这个实例
  const res = Construtor.apply(instance, args);
  // 4. 判断结果：如果构造函数有显示返回对象（非原始值），就返回它；如果没有就返回实例
  const isObject = typeof res === "object" && res !== null;
  const isFunction = typeof res === "function";

  if (isObject || isFunction) {
    return res;
  } else {
    return instance;
  }
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHello = function () {
  console.log(`Hello, i'm ${this.name}, i'm ${this.age} years old.`);
};

const max = myNew(Person, "max", 18);
max.sayHello();
