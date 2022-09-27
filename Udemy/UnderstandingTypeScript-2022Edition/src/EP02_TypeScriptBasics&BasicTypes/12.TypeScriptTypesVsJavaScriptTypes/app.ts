function addTotal12(n1: number, n2: number){
    // 此為 JavaScript處理的方式，在 TypeScript可以做另外的處理
    // if(typeof n1 === 'number' || typeof n2 === 'number') {
    //     throw new Error("Incorrect input");
    // }
    return n1 + n2;
}

const number12 = 511;
const number121 = 6.2;

const result12 = addTotal12(number12, number121);
console.log(result12);