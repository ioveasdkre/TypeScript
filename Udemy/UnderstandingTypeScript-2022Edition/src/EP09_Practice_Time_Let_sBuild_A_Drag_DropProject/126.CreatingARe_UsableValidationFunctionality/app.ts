// 創建可重用的驗證功能

// _ 告訴 ts你不使用這些參數 但你需要他
// auto bind decorator
function autobind126(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true, // 可配置
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor; // 調整後的描述符
}

// Validation
/**
 * @param {string | number} value input值
 * @param {boolean} required      必要的
 * @param {number} minLength      最小長度
 * @param {number} maxLength      最大長度
 * @param {number} min            最小值
 * @param {number} max            最大值
 */
interface ValidationTable126 {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function Validation126(validationTableInput: ValidationTable126) {
  let isValid = true; // 驗證結果
  // 檢查不為空(必需的)
  if (validationTableInput.required) {
    isValid =
      isValid && validationTableInput.value.toString().trim().length !== 0;
  }
  // 檢查最小長度
  if (
    validationTableInput.minLength != null && // != null 代表 不等於 null or undefined
    typeof validationTableInput.value === "string"
  ) {
    isValid =
      isValid &&
      validationTableInput.value.length >= validationTableInput.minLength;
  }
  // 檢查最大長度
  if (
    validationTableInput.maxLength != null && // != null 代表 不等於 null or undefined
    typeof validationTableInput.value === "string"
  ) {
    isValid =
      isValid &&
      validationTableInput.value.length <= validationTableInput.maxLength;
  }
  // 檢查最小值
  if (
    validationTableInput.min != null &&
    typeof validationTableInput.value === "number"
  ) {
    isValid = isValid && validationTableInput.value >= validationTableInput.min;
  }
  // 檢查最大值
  if (
    validationTableInput.max != null &&
    typeof validationTableInput.value === "number"
  ) {
    isValid = isValid && validationTableInput.value <= validationTableInput.max;
  }
  return isValid;
}

class ProjectInput126 {
  templateElement: HTMLTemplateElement; // 模板元素屬性
  hostElement: HTMLDivElement; // 宿主元素屬性(顯示的容器 id="app")
  element: HTMLFormElement; // template標籤內第一個元素為 form
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById("app") as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    ); // (要導入的文檔, 是否複製全部)創建一個 Node或 DocumentFragment來自另一個文檔的副本，以便稍後插入到當前文檔中
    this.element = importedNode.firstElementChild as HTMLFormElement; // 讀取第一個元素
    this.element.id = "user-input"; // 改變 id

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement; // 選擇器
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement; // 選擇器
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement; // 選擇器

    this.configure();
    this.attach();
  }

  // 顯示表單
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element); // Element在相對於它被調用的元素的給定位置插入給定元素節點
    /*
      'beforebegin': 在 targetElement本身之前。
      'afterbegin': 就在 targetElement, 在它的第一個孩子之前。
      'beforeend': 就在 targetElement, 在它的最後一個孩子之後。
      'afterend': targetElement本身之後。
    */
  }

  @autobind126 // 不使用 bind的方式 裝飾器的用途之一
  private submitHandler(event: Event) {
    event.preventDefault(); // 如果事件可以被取消，就取消事件（即取消事件的預設行為）。但不會影響事件的傳遞，事件仍會繼續傳遞
    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      this.clearInputs();
    }
  }

  /**
   * 設定 submit事件
   */
  private configure() {
    // bind 傳入 this 避免再執行的 fun指向 fun的 this而非 class的 this
    this.element.addEventListener("submit", this.submitHandler); // submit事件處理
  }

  // 讀取 input值
  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidationTable: ValidationTable126 = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidationTable: ValidationTable126 = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidationTable: ValidationTable126 = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !Validation126(titleValidationTable) ||
      !Validation126(descriptionValidationTable) ||
      !Validation126(peopleValidationTable)
    ) {
      alert("Invalid input, please try again!");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  // 清空所有 input
  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }
}

const projectInput126 = new ProjectInput126();
