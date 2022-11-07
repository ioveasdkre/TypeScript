type Admin88 = {
  name: string;
  privileges: string[];
};

type Employee88 = {
  name: string;
  startDate: Date;
};

type Combinable88 = string | number;

// 定義各種 參數組合
function add88(a: number, b: number): number; // 用於聯合類型
function add88(a: string, b: string): string; // 用於聯合類型
function add88(a: number, b: string): string; // 用於聯合類型
function add88(a: string, b: number): string; // 用於聯合類型
function add88(a: Combinable88, b: Combinable88) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  return a + b;
}

const result88 = add88("Max", "Schwarz");
//const result88 = add88("Max", "Schwarz") as string; // 斷言型別

result88.split("");
