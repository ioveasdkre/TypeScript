// 類型別名可用於“創建”您自己的類型。不過，您不僅限於存儲聯合類型 - 您還可以為（可能很複雜的）對像類型提供別名。
// 例如：
type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!
// 這使您可以避免不必要的重複並集中管理類型。

// 例如，您可以簡化此代碼：
function greet(user: { name: string; age: number }) {
    console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
    return checkAge > user.age;
}

// 簡化代碼如下
type User2 = { name: string; age: number };

function greet2(user: User) {
    console.log("Hi, I am " + user.name);
}

function isOlder2(user: User, checkAge: number) {
    return checkAge > user.age;
}