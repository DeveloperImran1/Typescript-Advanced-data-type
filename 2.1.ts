{
  // Type Assertion
  let anything: any;
  anything = "Hi my sweet hart";
  anything as number; // 1st a bole diasi anything variable er type any hobe. Tar por anything er value set korar por bujhte parlam, anything akta string. Tarpor bole dissi anything as number.  So Typescript er theke besi bujhi amra. Takei Type Assertion bole.

  // Ex 1:
  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGram("200") as string;
  const result2 = kgToGram(300) as number;

  //   ex 2 :
  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
