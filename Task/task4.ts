// Task 4:
interface Book {
  name: string;
  price: number;
}

interface Megazine {
  megazineName: "daily star" | "Prothom alo";
  date?: string;
}

// interface dia union , intersection er kaj kota jaina. interface sudho type define korar jonno.
// interface BookMegazineUnion {
//     ...Book | ...Megazine
// }

type BookMegazineUnion = Book | Megazine;
type BookMegazineIntersection = Book & Megazine;

const myBook: BookMegazineIntersection = {
  name: "English",
  price: 30,
  megazineName: "Prothom alo",
  date: "4-4-2025",
};
