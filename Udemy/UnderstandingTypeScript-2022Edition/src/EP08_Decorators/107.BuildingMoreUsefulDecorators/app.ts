// 一般方法 使用小寫開頭, 在大多數套件庫 裝飾器使用 大寫開頭
function WithTemplate107(template: string, hookId: string) {
  // return function (_: Function) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// 裝飾器的方法 傳入 _ 代表告訴 ts不導入 class
@WithTemplate107("<h1>My Person Object</h1>", "app")
class Person107 {
  name = "Max";

  constructor() {
    console.log("Creating person object");
  }
}
