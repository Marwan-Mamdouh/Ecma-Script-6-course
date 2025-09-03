// reflect api

// const obj = new Foo(...args); // 1
const obj = Reflect.construct(Foo, args);

let object = {
  x: 1,
  y: 2,
};

console.log(Reflect.get(object, "x")); // 2
// Expected output: 1

object = {
  // 3
  property1: 42,
};

console.log(Reflect.has(object, "property1"));
// Expected output: true

object = {}; // 4
Reflect.set(object, "foo", 42);

console.log(object.foo);
// Expected output: 42

object = {
  // 5
  property1: 42,
  property2: 13,
};

console.log(Reflect.ownKeys(object));
// Expected output: Array ["property1", "property2"]
