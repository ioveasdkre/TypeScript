type Admin84 = {
  name: string;
  privileges: string[];
};

type Employee84 = {
  name: string;
  startDate: Date;
};

type UnknownEmployee84 = Employee84 | Admin84;

type Combinable84 = string | number;

function add84(a: Combinable84, b: Combinable84) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  return a + b;
}

function printEmployeeInformation84(emp: UnknownEmployee84) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) console.log(`privileges: ${emp.privileges}`); // 檢查類型為 privileges的輸出
  if ("startDate" in emp) console.log(`start Date: ${emp.startDate}`); // 檢查類型為 startDate的輸出
}

class Car84 {
  drive() {
    console.log("Driving... ");
  }
}

class Truck84 {
  drive() {
    console.log("Driving a truck... ");
  }

  loadCargo(amount: number) {
    console.log(`Loading Cargo... ${amount}`);
  }
}

type Vehicle84 = Car84 | Truck84;

const v84_1 = new Car84();
const v84_2 = new Truck84();

function useVehicle84(vehicle: Vehicle84) {
  vehicle.drive();
  if (vehicle instanceof Truck84) vehicle.loadCargo(1000); // 檢查類型為 loadCargo的輸出 這是比較好的方式
}

useVehicle84(v84_1);
useVehicle84(v84_2);
