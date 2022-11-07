// interface 和 type可達到相同效果
// interface Admin83 {
//   name: string;
//   privileges: string[];
// }

// interface Employee83 {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee83 extends Admin83, Employee83 {}

type Admin83 = {
  name: string;
  privileges: string[];
};

type Employee83 = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee83 = Admin83 & Employee83;

const e1: ElevatedEmployee83 = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable83 = string | number;
type Numeric83 = number | boolean;

type Universal83 = Combinable83 & Numeric83;