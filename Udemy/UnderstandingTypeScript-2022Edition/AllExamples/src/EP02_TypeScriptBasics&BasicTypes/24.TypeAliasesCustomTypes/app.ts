type Combinable24 = number | string;
type ConversionDescription24 = "as-number" | "as-text";

function combine24(
    input1: Combinable24,
    input2: Combinable24,
    resultConversion: ConversionDescription24
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
}

const combinedAges24 = combine24(30, 26, "as-number");
console.log(combinedAges24);

const combinedStringAges24 = combine24("30", "26", "as-number");
console.log(combinedStringAges24);

const combinedNames24 = combine24("Max", "Anna", "as-text");
console.log(combinedNames24);
