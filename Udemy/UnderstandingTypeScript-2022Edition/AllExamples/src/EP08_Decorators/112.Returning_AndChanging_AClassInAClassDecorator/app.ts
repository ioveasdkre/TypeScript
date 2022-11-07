// 裝飾器 重新定義新的類別 新類別既可以實現 舊類別也可以添加新的定義 (需實例化 才會執行) 36行 pers112實例化
// 可與 107做比較

// 一般方法 使用小寫開頭, 在大多數套件庫 裝飾器使用 大寫開頭
function WithTemplate112(template: string, hookId: string) {
  // return function (_: Function) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // 建構子
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super(); // 傳遞資訊給父親(依照繼承對象建構子所需參數);

        console.log("查看裝飾器的執行順序: 我是 WithTemplate112");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// 裝飾器的方法 傳入 _ 代表告訴 ts不導入 class
@WithTemplate112("<h1>My Person Object</h1>", "app")
class Person112 {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers112 = new Person112();

console.log(pers112);
