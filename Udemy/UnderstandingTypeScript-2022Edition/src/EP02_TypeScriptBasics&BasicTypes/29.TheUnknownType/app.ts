let userInput29: unknown; // 未知類型
let userInput292: any; // 任何類型
let userName29: string;

userInput29 = 5;
userInput29 = "Max";

// 需添加額外的類型檢查(typeof) 以便將一個未知值賜予給一個固定的值
if (typeof userInput29 === "string") userName29 = userInput29; // Error 因將 未知類型給予 字串類型

userName29 = userInput292; // 不會出現 Error因為 any是 TypeScript中最靈活的類型, 他基本上禁用所有類型的檢查