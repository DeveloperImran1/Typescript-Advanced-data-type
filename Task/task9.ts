// Task 9:

type EmployeInfoType = {
  name: string;
  address: {
    district: string;
    boardResult: {
      ssc: number;
      hsc?: number;
    };
  };
};

const employeInfo: EmployeInfoType = {
  name: "Rakhi",
  address: {
    district: "Joypurhat",
    boardResult: {
      ssc: 4.55,
      hsc: 5.0,
    },
  },
};

const getEmployeeCity = (employe: EmployeInfoType): string => {
  return employe?.address?.district;
};
console.log(getEmployeeCity(employeInfo));
