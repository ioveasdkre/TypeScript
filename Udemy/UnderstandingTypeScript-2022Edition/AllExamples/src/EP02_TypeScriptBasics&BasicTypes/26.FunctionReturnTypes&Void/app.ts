// 方法設定返回類型 如果沒有特別需要，可讓 TypeScript自行判別
function add26(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult26(num: number): void {
    console.log("Result: ", num);
}

printResult26(add26(5, 12));
console.log(printResult26(add26(5, 12))); // undefined
