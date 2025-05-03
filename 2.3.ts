{
  // type GenericArray = Array<string>   // aikhane <> er moddhe type ta sudho  change hosse.
  type GenericArray<T> = Array<T>; // So amra GenericArray<params> aikhane perameter accept korte pari function er moto.

  // const rollNumbers : number[] = [2, 3, 4, 1];   // Normal type
  const rollNumbers: GenericArray<number> = [2, 3, 4, 1]; // Generic type

  // const mentors: string[] = ["x", "y", "z"];     // Normal type
  const mentors: GenericArray<string> = ["x", "y", "z"]; // Generic type

  const users: GenericArray<{ name: string; age: number }> = [
    {
      name: "Imran",
      age: 20,
    },
    {
      name: "Imran",
      age: 33,
    },
  ];

  // generic tuple
  //   type GenericTuple<X, Y> = Array<X, Y>;  // aivabe declare kora jabena. Karon akta array er moddhe different different type er value ase.

  type GenericTuple<X, Y> = [X, Y];

  //   const manush: [string, string] = ["Imran", "Raju"];   // Normal vabe type set
  const manush: GenericTuple<string, string> = ["Imran", "Raju"]; // generic vabe type set.

  const UserWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "Imran", email: "demo@gmail.com" },
  ];
}
