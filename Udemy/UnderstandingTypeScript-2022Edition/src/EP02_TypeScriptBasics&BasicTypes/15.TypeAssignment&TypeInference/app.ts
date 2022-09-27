function addTotal15(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(`${phrase}${result}`);
    } else {
        return result;
    }
}

// let number15: number = 511; // 此方式不是個好方法，因在 TypeScript已很好的判斷類型，看來多此一舉
let number15: number; // 如果還未初始化，宣告類型 TypeScript可幫你做檢查
number15 = 151;
const number151 = 6.2;
const printResult15 = true;
let resultPhrase15 = "Result: "; // 初始宣告為 string
// resultPhrase15 = 0; // 給予 string以外的類型，會發生錯誤

addTotal15(number15, number151, printResult15, resultPhrase15);
