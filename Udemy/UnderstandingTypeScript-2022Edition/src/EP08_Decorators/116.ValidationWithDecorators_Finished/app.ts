interface ValidatorConfig116 {
  [property: string]: {
    [validatableProp: string]: string[]; // ["required", "positive"]
  };
}

const registeredValidators116: ValidatorConfig116 = {}; // 儲存 屬性名稱: 檢查值

// 檢查 title
function Required116(target: any, propName: string) {
  registeredValidators116[target.constructor.name] = {
    ...registeredValidators116[target.constructor.name], // 避免新的物件覆蓋已存在的物件
    [propName]: [
      ...(registeredValidators116[target.constructor.name]?.[propName] ?? []), // 當左邊的值為 null 或者 undefined 時，就返回右邊的值
      "required",
    ],
  };
}

// 檢查 price
function PositiveNumber116(target: any, propName: string) {
  registeredValidators116[target.constructor.name] = {
    ...registeredValidators116[target.constructor.name], // 避免新的物件覆蓋已存在的物件
    [propName]: [
      ...(registeredValidators116[target.constructor.name]?.[propName] ?? []), // 當左邊的值為 null 或者 undefined 時，就返回右邊的值
      "positive",
    ],
  };
}

function validate116(obj: any) {
  // console.log(obj); // 初始化的 class屬性皆為空

  let isValid = true; // 避免立即回傳 導致全圈結束 故設定此參數 確保檢查所有屬性
  const objValidatorConfig = registeredValidators116[obj.constructor.name];

  console.log(objValidatorConfig);

  if (!objValidatorConfig) {
    return true;
  }

  // 讀取 key
  for (const prop in objValidatorConfig) {
    console.log(prop); // 裝飾器執行順序為  由下往上  故第一個檢查對象為 price
    // 裝飾的屬性為 key, 利用 key找到 value
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course116 {
  @Required116
  title: string;
  @PositiveNumber116
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm116 = document.querySelector("form") as HTMLFormElement;
courseForm116.addEventListener("submit", (event) => {
  event.preventDefault(); // 防止默認  這裡的事件為禁止 提交和發送
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value; // 隱性轉數字

  const createCourse = new Course116(title, price);

  // if(title.trim().length > 0) {} // 我們可以在這裡做驗證檢查格式 但為何不再裝飾器的幫助下檢查  不是更好嗎??

  if (!validate116(createCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
});
