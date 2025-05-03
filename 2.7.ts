//  generic constraint  with   keyof operator

type Vehicle = {
  bike: string;
  car: string;
  ship: string;
};

type Owner = "bike" | "car" | "ship"; // aita amra manualy korlam. Akjon owner er jekono akta property thakbe. Jeita union operator (|) er maddhome koresi.

type Owner2 = keyof Vehicle; // Uporer union operator use na kore, simply keyof operator dia korte pari. aikhane keyof typeAliasName. bolte bujhasse: Oi typeAlias er moddhe joto gulo key ase. Tader jekono akta property name hobe Owner2 er literal type value. Same as Owner type.

const person1: Owner = "bike";
const person2: Owner2 = "car";

// const getPropertyValue = <X, Y>(obj: X, key: Y) => {
//   return obj[key];  // 1st way error diba. key params k index hisabe use korte dibana.
// };

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const user1 = {
  name: "Ria",
  age: 30,
  readClass: 4,
};
getPropertyValue(user1, "age");
