// 查看 裝飾器的執行順序 ex: 由下而上

// 一般方法 使用小寫開頭, 在大多數套件庫 裝飾器使用 大寫開頭
function Logger108(logString: string) {
  return function (constructor: Function) {
    console.log("查看裝飾器的執行順序: 我是 Logger108");
    console.log(logString);
    console.log(constructor);
  };
}

// 一般方法 使用小寫開頭, 在大多數套件庫 裝飾器使用 大寫開頭
function WithTemplate108(template: string, hookId: string) {
  // return function (_: Function) {
  return function (constructor: any) {
    console.log("查看裝飾器的執行順序: 我是 WithTemplate108");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// 裝飾器的方法自少有一個參數傳入 它會自動導入 下方的 class
@Logger108("")
// 裝飾器的方法 傳入 _ 代表告訴 ts不導入 class
@WithTemplate108("<h1>My Person Object</h1>", "app")
class Person108 {
  name = "Max";

  constructor() {
    console.log("Creating person object");
  }
}
