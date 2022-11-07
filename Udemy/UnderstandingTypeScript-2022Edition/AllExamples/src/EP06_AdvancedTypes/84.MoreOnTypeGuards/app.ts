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
