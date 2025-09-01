const obj = {
  userName: "",
  address: "",
  age: 0,
};

const handler = {
  set(target, prop, val) {
    if (target.hasOwnProperty(prop)) {
      if (prop === "userName" && !(val.length <= 7)) {
        throw new Error("name must be a string and less than 7 characters");
      } else if (prop === "address" && typeof val !== "string") {
        throw new Error("address must be a string");
      } else if (
        prop === "age" &&
        (typeof val !== "number" || val <= 25 || val >= 60)
      ) {
        throw new Error("age must be number and between 25 and 60");
      }
      target[prop] = val;
    } else {
      throw new Error("prop is not defined");
    }
  },
};

const proxy = new Proxy(obj, handler);

proxy.userName = "marwan";
proxy.address = "Cairo";
proxy.age = 29;

console.log(proxy);
