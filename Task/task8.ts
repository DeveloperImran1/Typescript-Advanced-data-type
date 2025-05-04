// Task 8:

type User = {
  name: string;
  email: string;
};

type Admin = {
  adminLevel: string;
};

type AdminUser = User & Admin;

const describeAdmin = (user: AdminUser): string => {
  return `Hello all. I am ${user.name}. I am ${user.adminLevel}. It is my email: ${user.email}`;
};

const userObj: AdminUser = {
  name: "Raju",
  email: "demo@gmail.com",
  adminLevel: "2nd",
};

const adminInfo = describeAdmin(userObj);
console.log(adminInfo);
