abstract class Department69 {
  static fiscalYear = 2022;
  protected employees: string[] = []; // 私人屬性

  // 建構子
  constructor(protected readonly id: string, public name: string) {
    // console.log(this.fiscalYear); // Error 不能從內部呼叫 this使用, 因他類似於一個創建 class的實例
    console.log(Department69.fiscalYear); // 可以使用 class來訪問內部靜態屬性和 方法
  }

  abstract describe(): void;
}

class AccountingDepartment69 extends Department69 {
  constructor(id: string) {
    super(id, "IT"); // 傳遞資訊給父親
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }
}

const accounting69 = new AccountingDepartment69("d2");
accounting69.describe();
