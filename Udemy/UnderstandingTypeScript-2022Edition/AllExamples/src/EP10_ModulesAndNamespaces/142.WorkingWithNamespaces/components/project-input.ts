/// <reference path="base-component.ts"/>
/// <reference path="../decorator/autobind.ts" />
/// <reference path="../util/validation.ts" />
/// <reference path="../state/project-state.ts" />

namespace App {
  // 管理列表
  export class ProjectInput142 extends Component142<
    HTMLDivElement,
    HTMLFormElement
  > {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
      super("project-input", "app", true, "user-input"); // 傳遞資訊給 父組件. Component142

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
    }

    /**
     * 設定 submit事件
     */
    configure() {
      // bind 傳入 this 避免再執行的 fun指向 fun的 this而非 class的 this
      this.element.addEventListener("submit", this.submitHandler); // submit事件處理
    }

    renderContent() {}

    @autobind142 // 不使用 bind的方式 裝飾器的用途之一
    private submitHandler(event: Event) {
      event.preventDefault(); // 如果事件可以被取消，就取消事件（即取消事件的預設行為）。但不會影響事件的傳遞，事件仍會繼續傳遞
      const userInput = this.gatherUserInput();

      if (Array.isArray(userInput)) {
        const [title, desc, people] = userInput;
        console.log(title, desc, people);
        projectState142.addProject(title, desc, people);
        this.clearInputs();
      }
    }

    // 讀取 input值
    private gatherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;

      const titleValidationTable: ValidationTable142 = {
        value: enteredTitle,
        required: true,
      };
      const descriptionValidationTable: ValidationTable142 = {
        value: enteredDescription,
        required: true,
        minLength: 5,
      };
      const peopleValidationTable: ValidationTable142 = {
        value: +enteredPeople,
        required: true,
        min: 1,
        max: 5,
      };

      if (
        !Validation142(titleValidationTable) ||
        !Validation142(descriptionValidationTable) ||
        !Validation142(peopleValidationTable)
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
}
