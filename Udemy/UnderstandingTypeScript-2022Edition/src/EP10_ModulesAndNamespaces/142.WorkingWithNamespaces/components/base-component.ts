namespace App {
  // Component Base class 組件基類
  export abstract class Component142<T extends HTMLElement, U extends HTMLElement> {
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
}
