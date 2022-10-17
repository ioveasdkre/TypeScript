class Department67 {
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
  describe(this: Department67) {
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

class AccountingDepartment67 extends Department67 {
  private lastReport: string;

  // Getters 唯讀
  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;

    throw new Error("No report found");
  }

  // Setters 唯存
  set mostRecentReport(value: string){
    if(!value) throw new Error("Please pass in a valid value!");
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "IT"); // 傳遞資訊給父親
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "Max") return;

    this.employees.push(name);
  }
}

const accounting67 = new AccountingDepartment67("d2", []);

accounting67.mostRecentReport = "Year End Report"; // Setters 唯存
// accounting67.addReport("Something went wrong...");
console.log("My Getters: ", accounting67.mostRecentReport); // Getters 唯讀