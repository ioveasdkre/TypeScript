// 利用接口實現拖放

// Drag & Drop Interfaces 拖放界面
/**
 * @type {dragStartHandler(event: DragEvent): void} 拖曳開始
 * @type {dragEndHandler(event: DragEvent): void} 拖曳結束
 */
interface Draggable134 {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

/**
 * @type {dragOverHandler(event: DragEvent): void} 元素或文本選擇被拖動到有效的放置目標上時（每幾百毫秒），將觸發該事件
 * @type {dropHandler(event: DragEvent): void} 元素或文本選擇被放置在有效 放置目標上時，將觸發該事件
 * @type {dragLeaveHandle(event: DragEvent): void} 拖動的元素或文本選擇離開有效的放置目標時會觸發該事件
 */
interface DragTarget134 {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandle(event: DragEvent): void;
}

// _ 告訴 ts你不使用這些參數 但你需要他
// auto bind decorator
function autobind134(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true, // 可配置
    get() {
      const boundFn = originalMethod.bind(this); // 傳遞 this
      return boundFn;
    },
  };

  return adjDescriptor; // 調整後的描述符
}

// ValidationTable134
/**
 * @param {string | number} value input值
 * @param {boolean} required      必要的
 * @param {number} minLength      最小長度
 * @param {number} maxLength      最大長度
 * @param {number} min            最小值
 * @param {number} max            最大值
 */
interface ValidationTable134 {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

enum ProjectStatus134 {
  Active,
  Finished,
}

// Project Type
class Project134 {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus134
  ) {}
}

// Project State Management
type Listener134<T> = (items: T[]) => void;

class State134<T> {
  protected listeners: Listener134<T>[] = []; // 監聽使用 用來傳遞資料給其他人 避免原始資料被改動(projects)

  addListener(listenerFun: Listener134<T>) {
    this.listeners.push(listenerFun);
  }
}

// Project State Management 管理狀態
class ProjectState134 extends State134<Project134> {
  private projects: Project134[] = []; // 要顯示的資料
  private static instance: ProjectState134;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) return this.instance;

    this.instance = new ProjectState134();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project134(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus134.Active
    );

    this.projects.push(newProject);

    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice()); // 複製一份物件
    }
  }
}

const projectState134 = ProjectState134.getInstance(); // 處理共用一個狀態管理 保證使用完全相同的對象

function Validation134(validationTableInput: ValidationTable134) {
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

// Component Base class 組件基類
abstract class Component134<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement; // 模板元素屬性
  hostElement: T; // 宿主元素屬性(顯示的容器 id="app")
  element: U; // template標籤內第一個元素為 section因為 Element沒有這個元素 故使用 HTMLElement

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId) as T;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    ); // (要導入的文檔, 是否複製全部)創建一個 Node或 DocumentFragment來自另一個文檔的副本，以便稍後插入到當前文檔中
    this.element = importedNode.firstElementChild as U; // 讀取第一個元素
    if (newElementId) this.element.id = newElementId; // 改變 id

    this.attach(insertAtStart);
  }

  // 顯示表單
  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    ); // Element在相對於它被調用的元素的給定位置插入給定元素節點
    /*
      'beforebegin': 在 targetElement本身之前。
      'afterbegin': 就在 targetElement, 在它的第一個孩子之前。
      'beforeend': 就在 targetElement, 在它的最後一個孩子之後。
      'afterend': targetElement本身之後。
    */
  }

  abstract configure(): void;
  abstract renderContent(): void; // 渲染內容
}

// 設定項目
class ProjectItem134
  extends Component134<HTMLUListElement, HTMLLIElement>
  implements Draggable134
{
  private project: Project134;

  get persons() {
    if (this.project.people === 1) return "1 person";
    else return `${this.project.people} persons`;
  }

  constructor(hostId: string, project: Project134) {
    super("single-project", hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @autobind134
  dragStartHandler(event: DragEvent): void {
    console.log(event);
  }
  dragEndHandler(_event: DragEvent): void {
    console.log("DragEnd");
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }
  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons;
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}

// 接收列表中的項目 並顯示
class ProjectList134
  extends Component134<HTMLDivElement, HTMLElement>
  implements DragTarget134
{
  assignedProject: Project134[];

  // type: 進行中的項目 | 已完成的項目
  // 實例化項目列表時得到的參數  用來判斷不同的 id套用不同的 css
  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`); // 傳遞資訊給 父組件. Component134
    this.assignedProject = [];

    this.configure();
    this.renderContent();
  }

  @autobind134
  dragOverHandler(_event: DragEvent): void {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.add("droppable"); // 新增 class
  }

  dropHandler(_event: DragEvent): void {
    throw new Error("Method not implemented.");
  }

  @autobind134
  dragLeaveHandle(_event: DragEvent): void {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable"); // 刪除 class
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("drop", this.dropHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandle);

    projectState134.addListener((projects: Project134[]) => {
      const relevantProjects = projects.filter((prj) => {
        // 判斷 當前活動狀態
        if (this.type === "active")
          return prj.status === ProjectStatus134.Active; // 回傳 是否為 Active

        return prj.status === ProjectStatus134.Finished; // 回傳 是否為 Finished
      });
      this.assignedProject = relevantProjects;
      this.renderProjects();
    });
  }

  // 渲染內容
  renderContent() {
    const listId = `${this.type}-project-list`;
    this.element.querySelector("ul")!.id = listId;
    // textContent 和 innerText類似 最大差異為 textContent讀取的為原始資料  不受 css改變影響 例: 英文大小寫
    this.element.querySelector(
      "h2"
    )!.textContent = `${this.type.toUpperCase()} PROJECTS`; // 轉換成大寫並輸入於頁面
  }

  // 渲染項目
  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-project-list`
    ) as HTMLUListElement;
    listEl.innerHTML = ""; // 清空 table list內容
    for (const prjItem of this.assignedProject) {
      new ProjectItem134(this.element.querySelector("ul")!.id, prjItem);
    }
  }
}

// 管理列表
class ProjectInput134 extends Component134<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input"); // 傳遞資訊給 父組件. Component134

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

  @autobind134 // 不使用 bind的方式 裝飾器的用途之一
  private submitHandler(event: Event) {
    event.preventDefault(); // 如果事件可以被取消，就取消事件（即取消事件的預設行為）。但不會影響事件的傳遞，事件仍會繼續傳遞
    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      projectState134.addProject(title, desc, people);
      this.clearInputs();
    }
  }

  // 讀取 input值
  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidationTable: ValidationTable134 = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidationTable: ValidationTable134 = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidationTable: ValidationTable134 = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !Validation134(titleValidationTable) ||
      !Validation134(descriptionValidationTable) ||
      !Validation134(peopleValidationTable)
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

const projectInput134 = new ProjectInput134();
const activeProjectList134 = new ProjectList134("active");
const finishedProjectList134 = new ProjectList134("finished");
