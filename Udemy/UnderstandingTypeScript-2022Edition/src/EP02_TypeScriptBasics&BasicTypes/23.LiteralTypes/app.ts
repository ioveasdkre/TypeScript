function combine23(
    input1: number | string,
    input2: number | string,
    resultConversion: "as-number" | "as-text"
) {
    let result;
    // 聯合類型可能會需要 typeof做判斷，但不一定要
    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;

    // 此判斷可加入上列
    // if (resultConversion === "as-number") {
    //     return +result;
    //     // return parseFloat(result);
    // } else {
    //     return result.toString();
    // }
}

const combinedAges23 = combine23(30, 26, "as-number");
console.log(combinedAges23);

const combinedStringAges23 = combine23("30", "26", "as-number");
console.log(combinedStringAges23);

const combinedNames23 = combine23("Max", "Anna", "as-text");
console.log(combinedNames23);
