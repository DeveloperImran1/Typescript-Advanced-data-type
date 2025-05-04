// Task 11 :

const processData = (data: unknown) => {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else if (typeof data === "number") {
    return data * data;
  } else {
    return "wrong data";
  }
};
console.log(processData(null));
