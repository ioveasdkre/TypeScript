const person19: {
    role: [number, string]; // 特殊陣列 設定第一元素 number 第二元素 string 長度為 2的陣列
} = {
    role: [2, "author"], // 聯合類型
};

// person19.role.push("admin");
// person19.role[1] = 10; // 因為是聯合類型 可把原本[1]的內容物更改類型

person19.role = [0, "test"];
// person19.role = [0, "test", "xxx"]; // !!!　ERROR　!!!
