// extends 泛型限制
// 因 Object.assign限定至少要傳入一個  Object故設定限制
function merge95<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB); // 合併物件
}

const mergedObj95 = merge95({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
const mergedObj95_2 = merge95<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 30 }
);
