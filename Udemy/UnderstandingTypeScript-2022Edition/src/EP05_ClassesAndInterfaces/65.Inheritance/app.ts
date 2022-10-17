class Department65 {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = []; // 私人屬性

  // 建構子
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  // fun
  // this 是避免未建構 class, 直接解構 class, 並且未傳入建構子所需參數
  describe(this: Department65) {
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

class TIDepartment65 extends Department65 {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT"); // 傳遞資訊給父親
    this.admins = admins;
  }
}

class AccountingDepartment65 extends Department65 {
  constructor(id: string, private reports: string[]) {
    super(id, "IT"); // 傳遞資訊給父親
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting65 = new TIDepartment65("Accounting", ["Max"]);

accounting65.addEmployee("Max");
accounting65.addEmployee("Mim");

accounting65.describe();
accounting65.printEmployeeInformation();

console.log(accounting65);

const accounting65_2 = new AccountingDepartment65("d2", []);
accounting65_2.addReport("Something went wrong...");
accounting65_2.printReports();