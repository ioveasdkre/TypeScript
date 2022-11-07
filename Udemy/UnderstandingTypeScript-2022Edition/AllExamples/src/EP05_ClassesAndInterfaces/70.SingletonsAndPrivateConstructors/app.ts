abstract class Department70 {
  static fiscalYear = 2022;

  // 建構子
  constructor(protected readonly id: string, public name: string) {}
}

class AccountingDepartment70 extends Department70 {
  private static instance: AccountingDepartment70;
  // 建構子
  private constructor(id: string) { // 單例模式
    super(id, "Accounting");
  }
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment70("My getInstance: ");
    return this.instance;
  }
}

// const accounting70 = new AccountingDepartment70("d2"); // 此類為 會計部門, 因由內部人員調整資料 故調整為 私人

const accounting70 = AccountingDepartment70.getInstance();
console.log(accounting70);
