// Task 6:

{
  const sum = (...rest: number[]): number => {
    // perameter er moddhe ta holo rest operator
    console.log(...rest); // aita holo spread operator
    let sum = 0;
    rest.map((number) => (sum += number));
    return sum;
  };
  const result = sum(1, 2, 3, 4, 5, 6, 7, 8);
  console.log(result);
}
