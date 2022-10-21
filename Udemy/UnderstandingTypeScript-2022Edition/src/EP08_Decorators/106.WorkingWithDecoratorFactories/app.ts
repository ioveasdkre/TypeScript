// 一般方法 使用小寫開頭, 在大多數套件庫 裝飾器使用 大寫開頭
function Logger106(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// 裝飾器的方法自少有一個參數傳入 它會自動導入 下方的 class
@Logger106("LOGGING - PERSON")
class Person106 {
  name = "Max";

  constructor() {
    console.log("Creating person object");
  }
}
