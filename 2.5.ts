{
  // aikhane parameter er type and return type fixed.
  const createArray = (param: string): string[] => {
    return [param];
  };
  const res1 = createArray("Imran");

  // Function with generic  --> type gulo dynamicaly dita parbo. Ar function a type ta dynamic vabe dewer jonno perameter er age <> arrow er moddhe dita hobe.
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const res2 = createArrayWithGeneric<number>(4);
  type countryObjType = { country: string; nature: string };
  const res3 = createArrayWithGeneric<countryObjType>({
    country: "Bangladesh",
    nature: "normal",
  });
  const res4 = createArrayWithGeneric<number[]>([2, 3, 4]);

  // tuple generic type with function
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const res5 = createArrayWithTuple<string, string>("Imran", "Taslima");
  const res6 = createArrayWithTuple<string, { name: string }>("Imran", {
    name: "Easmin",
  });

  // Example 4:
  const addCourseToStudent = <T>(student: T): T => {
    const courseName = "Next Level Development";
    return { ...student, courseName };
  };

  const res7 = addCourseToStudent<{ name: string; sheCan: string }>({
    name: "Tanjila",
    sheCan: "dance",
  });
  const res8 = addCourseToStudent<{ name: string; shelive: string }>({
    name: "sahida",
    shelive: "dhaka",
  });
}
