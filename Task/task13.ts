// // Task 13:

// type MyArrayType<T> = Array<T>;

// const removeDuplicateElement = <T>(arr: T[]): T[] => {
//   return Array.from(new Set(arr));
// };

// const numberArr: MyArrayType<number> = [2, 3, 3, 4, 2, 4, 5, 6, 7, 5];

// const result1 = removeDuplicateElement(numberArr);
// console.log(result1);

const removeDuplicate = <T>(arr: T[]): T[] => {
  const newArr: T[] = [];
  arr.forEach((el) => {
    newArr.includes(el) || newArr.push(el);
  });
  return newArr;
};

// const removeDuplicate = <T extends string | number | boolean>(
//   arr: T[]
// ): T[] => {
//   const newArr: T[] = [];
//   arr.forEach((el) => {
//     if (!newArr.includes(el)) {
//       newArr.push(el);
//     }
//   });
//   return newArr;
// };

type MyArrayType<T> = Array<T>;

const numberArr = [2, 3, 3, 4, 2, 4, 5, 6, 7, 5];

const result4 = removeDuplicate<number>(numberArr);
console.log(result4);
