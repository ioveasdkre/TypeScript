// const userInputElement87 = <HTMLInputElement>document.getElementById("user-input");
const userInputElement87 = document.getElementById(
  "user-input"
)! as HTMLInputElement; // 因 React使用第一種方式 可能與本身架構會造成衝突，固可使用 第二種方式
userInputElement87.value = "Hi there!";

if (userInputElement87) {
  // 第二種方式 可不加驚嘆號
  (userInputElement87 as HTMLInputElement).value = "Hi there!";
}

// 想要設計一個 儲存錯誤的介面，但不局限於 email or userName的錯誤
interface ErrorContainer {
  // { email: "Not a valid email!", userName: "Must start with a charter!"}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  userName: "Must start with a capital character!",
};
