/// <reference path="base-component.ts"/>
/// <reference path="project-item.ts"/>
/// <reference path="../decorator/autobind.ts" />
/// <reference path="../state/project-state.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../models/drag-drop.ts" />

namespace App {
  // 接收列表中的項目 並顯示
  export class ProjectList142
    extends Component142<HTMLDivElement, HTMLElement>
    implements DragTarget142
  {
    assignedProject: Project142[];

    // type: 進行中的項目 | 已完成的項目
    // 實例化項目列表時得到的參數  用來判斷不同的 id套用不同的 css
    constructor(private type: "active" | "finished") {
      super("project-list", "app", false, `${type}-projects`); // 傳遞資訊給 父組件. Component142
      this.assignedProject = [];

      this.configure();
      this.renderContent();
    }

    @autobind142
    dragOverHandler(_event: DragEvent): void {
      if (
        _event.dataTransfer &&
        _event.dataTransfer.types[0] === "text/plain"
      ) {
        _event.preventDefault(); // 取消預設設定 才能會觸發 drop放置事件
        const listEl = this.element.querySelector("ul")!;
        listEl.classList.add("droppable"); // 新增 class
      }
    }

    @autobind142
    dropHandler(_event: DragEvent): void {
      const prjId = _event.dataTransfer!.getData("text/plain");
      projectState142.moveProject(
        prjId,
        this.type === "active"
          ? ProjectStatus142.Active
          : ProjectStatus142.Finished
      );
    }

    @autobind142
    dragLeaveHandle(_event: DragEvent): void {
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.remove("droppable"); // 刪除 class
    }

    configure() {
      this.element.addEventListener("dragover", this.dragOverHandler);
      this.element.addEventListener("drop", this.dropHandler);
      this.element.addEventListener("dragleave", this.dragLeaveHandle);

      projectState142.addListener((projects: Project142[]) => {
        const relevantProjects = projects.filter((prj) => {
          // 判斷 當前活動狀態
          if (this.type === "active")
            return prj.status === ProjectStatus142.Active; // 回傳 是否為 Active

          return prj.status === ProjectStatus142.Finished; // 回傳 是否為 Finished
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
        new ProjectItem142(this.element.querySelector("ul")!.id, prjItem);
      }
    }
  }
}
