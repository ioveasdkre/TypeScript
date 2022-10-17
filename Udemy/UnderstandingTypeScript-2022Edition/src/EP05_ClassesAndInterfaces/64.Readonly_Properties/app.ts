class Department64 {
  // private readonly id: string;
  // private name: string;

  // 建構子
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  // fun
  // this 是避免未建構 class, 直接解構 class, 並且未傳入建構子所需參數
  describe(this: Department64) {
    // this.id = "ff"; // Error
    console.log(`Department (${this.id}): ${this.name}`);
  }
}