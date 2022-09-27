function addTotal14(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(`${phrase}${result}`);
    } else {
        return result;
    }
}

const number14 = 511;
const number141 = 6.2;
const printResult14 = true;
const resultPhrase14 = "Result: ";

addTotal14(number14, number141, printResult14, resultPhrase14);
