// // tsconfig.json設定
// // noImplicitAny 在表達式和聲明上有隱含的 any類型時報錯
// function secdAnalytics(data) {
//   console.log(data);
// }

// secdAnalytics("The data");

// // strictNullChecks 啟用嚴格的 null 檢查
// const button39 = document.querySelector("button");

// button39.addEventListener("lick", () => {
//   console.log();
// });

// const button39_1 = document.querySelector("button");

// function clickHandler(massage: string) {
//   console.log("Clicked" + massage);
// }

// // strictBindCallApply 啟用對 bind, call, apply 更嚴格的型別檢查
// if (button39_1) button39_1.addEventListener("lick", clickHandler.bind(null));
// // if (button39_1) button39_1.addEventListener("lick", clickHandler.bind(null, "You're welcome!"));

function test(){
    console.log("test");
}

test();