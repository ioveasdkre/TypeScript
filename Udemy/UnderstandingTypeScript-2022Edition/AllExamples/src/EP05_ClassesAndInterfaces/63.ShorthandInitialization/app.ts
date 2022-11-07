class Department63 {
  // private id: string;
  // private name: string;

  // 建構子
  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  // fun
  // this 是避免未建構 class, 直接解構 class, 並且未傳入建構子所需參數
  describe(this: Department63) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}

const accounting63 = new Department63("d1", "Accounting");

accounting63.describe();
