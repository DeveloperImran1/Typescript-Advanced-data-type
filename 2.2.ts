{
  // Type alias

  type User1 = {
    name: string;
    roll: number;
  };
  type UserWithRole1 = User1 & { role: string };

  interface User2 {
    name: string;
    roll: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: User1 = {
    name: "Imran",
    roll: 2,
  };

  //   interface
  interface User2 {
    name: string;
    roll: number;
  }
  const user2: User2 = {
    name: "Imran",
    roll: 2,
  };
}

// js --> object, array akdhoroner object, function oo akdhoroner object.
type Roll1 = number[];
interface Roll2 {
  [index: number]: number;
}

const roll1: Roll1 = [1, 2, 3];
// 0, 1, 2  ---> index gulo number type

// Function er khetre interface er maddhome type declare
type Add1 = (number1: number, number2: number) => number;

interface Add2 {
  (number1: number, number2: number): number;
  // aikhane 1st bracket er moddhe perameter er type gulo bolesi. Ar last a colon er por function er return type bole diasi.
}

const add: Add1 = (number1, number2) => number1 + number2;
