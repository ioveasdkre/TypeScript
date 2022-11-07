// type AddFn = (a: number, b: number) => number;
interface AddFn77 {
  (a: number, b: number): number; // 未命名 fun名稱, 預設為 interface的 Name
}

let add77: AddFn77;

add77 = (n1: number, n2: number) => {
  return n1 + n2;
};
