class Department61 {
  name: string;

  // 建構子
  constructor(n: string) {
    this.name = n;
  }

  // fun
  // this 是避免未建構 class, 直接解構 class, 並且未傳入建構子所需參數
  describe(this: Department61) {
    console.log(`Department: ${this.name}`);
  }
}

const accounting61 = new Department61("Accounting");

accounting61.describe();

const accountingCopy = {name: "s", describe: accounting61.describe }; // 若拿掉 name會發生錯誤, 因 name為建構子參數, 詳細請餐 this(細節)

accountingCopy.describe();
