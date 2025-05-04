// Task 5:

function reverseString(string: string): string {
  return string.split("").reverse().join("");
}
const result: string = reverseString("hello");
console.log(result);
