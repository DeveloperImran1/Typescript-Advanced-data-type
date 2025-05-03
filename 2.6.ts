// constraints:  amra function er perameter a akta kore student object pathassi. Jei student object a name, email, and id must be thaka dorkar. But amra issa moto pathassi. Na dila kono error dissana. So, sodi function er perameter a type k catch korar somoi bole dei, ai property gulo must be thaktei hobe. Ai force korake bole constraints.

const addCourseToStudent = <
  T extends { id: number; name: string; email: string }
>(
  student: T
): T => {
  const courseName = "Next Level Development";
  return { ...student, courseName };
};

const res9 = addCourseToStudent<{
  name: string;
  sheCan: string;
  id: number;
  email: string;
}>({
  name: "Tanjila",
  sheCan: "dance",
  id: 23223,
  email: "taijila@gmail.com",
});
const res10 = addCourseToStudent<{
  name: string;
  shelive: string;
  id: number;
  email: string;
}>({
  name: "sahida",
  shelive: "dhaka",
  id: 2323423,
  email: "sahida@gmail.com",
});
