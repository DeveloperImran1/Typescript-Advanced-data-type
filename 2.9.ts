// Conditional types
type A1 = number;
type B1 = string;

type X = A1 extends number ? true : false; // A1 er type number hole Aikhane X er type true hobe . Otherwise false

type Y = A1 extends null ? true : B1 extends string ? true : false; // A1 er moddhe null property or value thakle true otherwise next block a jabe. And seikhane check korbe B1 er type ki string. Hole true return korbe. Otherwise false return korbe.

// Ex 2:  Ami check korbo Seikh typer moddhe jei jei property ase, tader upor depend kore bivinno typer er type vinno vinno set korbo. Mane CheckVehicle type k akta key dia call korte hobe. jei key dia call korbo, sei key Seikh er moddhe thakle true otherwise false return korbe.
type Seikh = {
  bike: string;
  car: string;
  ship: string;
};

// car ase kina | bike ase kina | ship ase kina | tractor ase kina

// type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;   // ai liner mane holo perameter hisabe T akta key asbe. Sei key ta ki bike, naki ship, naki car. Ai 3tar moddhe hole true return korbe. Otherwise false return korebe.

type CheckVehicle<T> = T extends keyof Seikh ? true : false; // Uporer line ta aivabe dynamicaly keyof keyword use kore korte pari.

type HasTractor = CheckVehicle<"tractor">; // Kono type k perameter hisabe argument pass korar jonno last a <> arrow symboll er moddhe dewa hoi.
