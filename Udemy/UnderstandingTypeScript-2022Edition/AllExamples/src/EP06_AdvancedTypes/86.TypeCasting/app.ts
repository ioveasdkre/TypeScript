// const userInputElement86 = <HTMLInputElement>document.getElementById("user-input");
const userInputElement86 = document.getElementById(
  "user-input"
)! as HTMLInputElement; // 因 React使用第一種方式 可能與本身架構會造成衝突，固可使用 第二種方式
userInputElement86.value = "Hi there!";

if (userInputElement86) { // 第二種方式不加驚嘆號
  (userInputElement86 as HTMLInputElement).value = "Hi there!";
}
