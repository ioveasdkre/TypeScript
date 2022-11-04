/// <reference path="base-component.ts" />
/// <reference path="../decorator/autobind.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../models/drag-drop.ts" />

namespace App {
  // 設定項目
  export class ProjectItem142
    extends Component142<HTMLUListElement, HTMLLIElement>
    implements Draggable142
  {
    private project: Project142;

    get persons() {
      if (this.project.people === 1) return "1 person";
      else return `${this.project.people} persons`;
    }

    constructor(hostId: string, project: Project142) {
      super("single-project", hostId, false, project.id);
      this.project = project;

      this.configure();
      this.renderContent();
    }

    @autobind142
    dragStartHandler(event: DragEvent): void {
      // dataTransfer 保存使用者於拖放操作過程中的資料
      // setData(類型, 數據) 設置拖放操作的drag data到指定的數據和類型
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.effectAllowed = "move"; // 允許進行拖動操作的效果
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
}
