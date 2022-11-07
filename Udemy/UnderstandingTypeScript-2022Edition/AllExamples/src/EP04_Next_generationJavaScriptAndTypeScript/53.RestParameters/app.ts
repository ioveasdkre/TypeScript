const hobbies53 = ["Sports", "Cooking"];
const activeHobbies53 = ["hiking", ...hobbies53];

activeHobbies53.push(...hobbies53); // 滑鼠移到 push會顯示參數 ...string: string[]


const add53 = (...numbers: number[]) => {
  // 將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const add53_1 = (...numbers: [number, number, number]) => {
  // 將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列化為單一值
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers53 = add53(5, 10, 2, 3.7);
const addedNumbers53_1 = add53_1(5, 10, 2);

console.log(addedNumbers53);
