class Department62 {
  public name: string; // 公用屬性 預設的 不需要添加
  private employees: string[] = []; // 私人屬性

  // 建構子
  constructor(n: string) {
    this.name = n;
  }

  // fun
  // this 是避免未建構 class, 直接解構 class, 並且未傳入建構子所需參數
  describe(this: Department62) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting62 = new Department62("Accounting");

accounting62.addEmployee("Max");
accounting62.addEmployee("Mim");
// accounting62.employees[2] = "Benson"; // 雖然可以這麼做, 但建議不要, 避免發生錯誤

accounting62.describe();
accounting62.printEmployeeInformation();