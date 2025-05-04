{
  // Utility Types
  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contact: string;
  };

  // ----------- Destucturing -------------
  type UserAgeType = Person["age"]; // Output: type UserAge = number;

  // ----------- Pick -------------
  // destucturing and Pick er moddhe different holo: distucturing a kono typer akta property er type k access korte parbo. and seita normal vabe thakbe. Kono object er moddhe noi. Ar Pick syntax er maddhome korle  akadhik property er type k case kora jai. Ja object akare pawa jai.
  type UserNameType = Pick<Person, "name">; //Output: type UserNameType = {name:string}
  type UserNameEmailType = Pick<Person, "name" | "email">; //Output: type UserNameType = {name:string; email: string}

  // ----------- Omit -------------
  // Kono type theke kiso property k bad dia ba omit kore, baki sokol property k nia type create korbe.
  type ContactInfoType = Omit<Person, "name" | "age">; // Output: type ContactInfoType = {email: string; contact: string}

  // ----------- Required -------------

  type PersonRequiredtype = Required<Person>; // Person er all property k required kore diba. email a optional silo. Oitakew required kore diba.

  // ----------- Partial -------------

  type PersonPartialtype = Partial<Person>; // Person er all property k optional kore diba.

  // ----------- Readonly -------------

  // amra normaly kono object er property value change korte pari. Kinto jodi type define korar somoi readonly name : string   kore dei, tahole oi object er property value change korte parina. Ar Kono type alias er sokol property k ai readonly add korar jonno aivabe Readonly utility use korte pari.
  type PersonReadOnlyType = Readonly<Person>;

  // ----------- Record -------------

  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  //   const obj1: MyObj = {
  //     a: "aa",
  //     b: "bb",
  //     c: "cc", // aikhane c property add korte parbona. Karon MyObj typer moddhe c property define kora nai.
  //   };

  type MyObj = Record<string, string>; // aikhane Record<property name type, property value type> ;   aikhane akta somossa ase. 1st perameter a string diasi. aita thik ase. Karon object er propertyName sobsomoi string hoi. But value vinno vinno hote pare. Se khetre object er value string na hoia, onno typer er hole error diba. So amra most of the time 2nd peramter a unknown use korbo.

  type MyObj2 = Record<string, unknown>;

  const obj1: MyObj2 = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: 3,
  };

  // amader bivinno somoi empty object create korte hoi. Tokhon Record use korte pari aivabe
  const myObj3: Record<string, unknown> = {};
}
