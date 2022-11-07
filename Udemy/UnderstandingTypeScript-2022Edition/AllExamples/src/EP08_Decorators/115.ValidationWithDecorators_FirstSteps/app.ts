class Course115 {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm115 = document.querySelector("form") as HTMLFormElement;
courseForm115.addEventListener("submit", (event) => {
  event.preventDefault(); // 防止默認  這裡的事件為禁止 提交和發送
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value; // 隱性轉數字

  // if(title.trim().length > 0) {} // 我們可以在這裡做驗證檢查格式 但為何不再裝飾器的幫助下檢查  不是更好嗎??  請查看 116裝飾器驗證格式檢查

  const createCourse = new Course115(title, price);
  console.log(createCourse);
});
