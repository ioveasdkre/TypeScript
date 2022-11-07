// 一般方法 使用小寫開頭, 在大多數套件庫 裝飾器使用 大寫開頭
function Logger105(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

// 裝飾器屬性 自少有一個參數傳入 它會自動導入 下方的 class
@Logger105
class Person105 {
  name = "Max";

  constructor() {
    console.log("Creating person object");
  }
}