// 方法設定返回類型 如果沒有特別需要，可讓 TypeScript自行判別
function add27(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult27(num: number): void {
    console.log("Result: ", num);
}

let combineValues27: Function;
let combineValues272: (a: number, b: number) => number; // 宣告接收方法

combineValues = add27;
// combineValues = printResult27; // undefined
combineValues272 = add27;
// combineValues = 5; // Error

console.log(combineValues(8, 8));
console.log(combineValues272(8, 8));