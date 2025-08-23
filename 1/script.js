let count = "hello";
console.log(count);

function task1() {
  let myArray = ["hello", "world"];
  console.log(myArray);

  const [first, second] = myArray;
  myArray = [second, first];

  console.log(myArray);
}
// --------------------------------------------------
function task2(...array) {
  console.log(`Max is: ${Math.max(...array)}`);
  console.log(`Min is: ${Math.min(...array)}`);
}
// --------------------------------------------------
const fruits = ["apple", "strawberry", "banana", "orange", "mango"];
function task3_1(arr) {
  console.log(arr.every((item) => typeof item === "string"));
}

function task3_2(arr) {
  console.log(arr.some((element) => element.startsWith("a")));
}

function task3_3(arr) {
  console.log(
    arr.filter((item) => item.startsWith("b") || item.startsWith("s"))
  );
}

function task3_4(arr) {
  return arr.map((item) => `I like ${item}`);
}

function task3_5(arr) {
  task3_4(arr).forEach((element) => console.log(element));
}
// --------------------------------------------------

task1();
const numberArr = [1, 2, 3, 4, 5, 6, 10, -10, 190, 22];
task2(...numberArr);

task3_1(fruits);
task3_2(fruits);
task3_3(fruits);
console.log(task3_4(fruits));
task3_5(fruits);
