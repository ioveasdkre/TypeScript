class Department66 {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = []; // 私人屬性

  // 建構子
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  // fun
  // this 是避免未建構 class, 直接解構 class, 並且未傳入建構子所需參數
  describe(this: Department66) {
    // this.id = "ff"; // Error
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class AccountingDepartment66 extends Department66 {
  constructor(id: string, private reports: string[]) {
    super(id, "IT"); // 傳遞資訊給父親
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if(name === "Max")
      return;
    
    this.employees.push(name);
  }
}

const accounting66 = new AccountingDepartment66("d2", []);

accounting66.addReport("Something went wrong...");

accounting66.addEmployee("Max");
accounting66.addEmployee("Min");

accounting66.printReports();
accounting66.printEmployeeInformation();