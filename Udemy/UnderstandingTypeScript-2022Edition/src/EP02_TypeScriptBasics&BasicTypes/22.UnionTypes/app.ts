function combine22(input1: number | string, input2: number | string) {
    let result;
    // 聯合類型可能會需要 typeof做判斷，但不一定要
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges22 = combine22(30, 26);
console.log(combinedAges22);

const combinedNames22 = combine22("Max", "Anna");
console.log(combinedNames22);
