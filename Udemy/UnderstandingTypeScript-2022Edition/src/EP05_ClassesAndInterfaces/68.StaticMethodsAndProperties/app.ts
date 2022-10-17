class Department68 {
  static fiscalYear = 2022;
  protected employees: string[] = []; // 私人屬性

  // 建構子
  constructor(private readonly id: string, public name: string) {
    // console.log(this.fiscalYear); // Error 不能從內部呼叫 this使用, 因他類似於一個創建 class的實例
    console.log(Department68.fiscalYear); // 可以使用 class來訪問內部靜態屬性和 方法
  }

  static createEmployee(name: string){
    return {name: name}
  }
}

const employee = Department68.createEmployee("Max");

console.log(employee, Department68.fiscalYear);