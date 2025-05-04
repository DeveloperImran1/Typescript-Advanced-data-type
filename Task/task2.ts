// Task 2:
function userInfo(
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
) {
  console.log(`My name is ${name} and age is ${age}. I have a ${role}`);
}

userInfo("Imran", 30, "admin");
