// Task 7:

{
  const getLengthOrMultiply = (param: string | number): number | undefined => {
    if (typeof param === "string") {
      return param.length;
    } else if (typeof param === "number") {
      return param * param;
    }
  };

  //   const result = getLengthOrMultiply(5);  // aikhane result er upor hover korle result er type hisabe number | undefined dekhabe.
  const result = getLengthOrMultiply(5) as number; // akhon result er upor hover korle sudho number ee bolbe. Karon ami explicitly bole disi, aita number ee hobe.
  console.log(result);
}
