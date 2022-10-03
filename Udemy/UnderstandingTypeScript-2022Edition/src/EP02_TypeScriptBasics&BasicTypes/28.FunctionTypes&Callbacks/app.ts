function addAndHandle28(
    n1: number,
    n2: number,
    cb: (num: number) => void
): void {
    const result = n1 + n2;
    cb(result); // 回調
}

addAndHandle28(10, 20, (result) => {
    console.log(result);
    return result; // 在回調類型中, 將忽略你可能返回的任何結果
});
