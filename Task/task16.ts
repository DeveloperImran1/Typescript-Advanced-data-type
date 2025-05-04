// Task 16:

type UserType = {
  name: string;
  age: number;
  isStudent: boolean;
};

const getObjValue = <T, X extends keyof T>(obj: T, key: X): T[X] => {
  return obj[key];
};

const user: UserType = {
  name: "imran",
  age: 20,
  isStudent: true,
};

console.log(getObjValue<UserType, "name">(user, "name"));
