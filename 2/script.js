//courseName,courseDuration, courseOwner

function task1(options = {}) {
  const ALLOWEDPROP = ["courseName", "courseDuration", "courseOwner"];

  if (!ALLOWEDPROP.every((key) => Object.keys(options).includes(key))) {
    throw new Error(
      `can not work with this object: ${Object.entries(options)}`
    );
  }

  return `courseName is: ${options.courseName}, course duration is: ${options.courseDuration} and course owner is: ${options.courseOwner}`;
}

console.log(task1({ courseName: "", courseDuration: "", courseOwner: "" }));
// task1({ hello: "world" });
