const replace = {
  [Symbol.replace](words = "JavaScript", replacer = "...") {
    if (words.length >= 15) {
      return `${words.slice(0, 15)}${replacer}`;
    }
    return words;
  },
};

function task1() {
  console.log("hello".replace(replace));
  console.log("hello, world everyone".replace(replace));
}

const myObj = {
  myName: "Marwan",
  age: 19,
  [Symbol.iterator]() {
    const keys = Object.entries(this);
    let index = 0;
    return {
      next() {
        if (keys.length > index) {
          return {
            value: keys[index++],
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  },
};

function task2() {
  for (const [key, value] of myObj) {
    console.log(`key:${key}, value: ${value}`);
  }
}

function task3(options) {
  const ALLOWED_PROPERTIES = ["courseName", "courseDuration", "courseOwner"];
  const keys = Object.keys(options);
  if (
    ALLOWED_PROPERTIES.length !== keys.length ||
    !ALLOWED_PROPERTIES.every((key) => keys.includes(key))
  ) {
    throw new Error(
      `can not work with this object: ${Object.entries(options)}`,
    );
  }
  return `courseName is: ${options.courseName}, course duration is: ${options.courseDuration} and course owner is: ${options.courseOwner}`;
}

// task1();
// task2();
// console.log(task3({ courseName: "", courseDuration: "", courseOwner: "" }));
// task3({});
