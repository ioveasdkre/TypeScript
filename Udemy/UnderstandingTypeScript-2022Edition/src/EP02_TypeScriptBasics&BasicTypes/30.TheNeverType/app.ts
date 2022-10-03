// never 遠永不存在的值, 告訴其他人表示使函數 or變數的目的是永遠不返回任何內容
function generateError(message: string, code: number): never {
    throw { message: message, errerCode: code }; // throw 拋出錯誤
    while (true) {} // whrow 永遠凍結之後的內容
}

const result = generateError("An error occurred!", 500);
console.log(result);
