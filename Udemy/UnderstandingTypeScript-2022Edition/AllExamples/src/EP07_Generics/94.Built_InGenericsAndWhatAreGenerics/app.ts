// const names94 = ["Max", "Manuel"]; // 一般方式 得到的是 string[]
const names94: Array<string | number> = [];

// 利用泛型宣告告訴 TypeScript回傳的類型
const promise: Promise<string> = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  data.split("");
});
