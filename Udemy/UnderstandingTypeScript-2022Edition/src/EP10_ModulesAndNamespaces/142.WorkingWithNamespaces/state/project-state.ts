namespace App {
  // Project State Management
  type Listener142<T> = (items: T[]) => void;

  class State142<T> {
    protected listeners: Listener142<T>[] = []; // 監聽使用 用來傳遞資料給其他人 避免原始資料被改動(projects)

    addListener(listenerFun: Listener142<T>) {
      this.listeners.push(listenerFun);
    }
  }

  // Project State Management 管理狀態
  export class ProjectState142 extends State142<Project142> {
    private projects: Project142[] = []; // 要顯示的資料
    private static instance: ProjectState142;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) return this.instance;

      this.instance = new ProjectState142();
      return this.instance;
    }

    addProject(title: string, description: string, numOfPeople: number) {
      const newProject = new Project142(
        Math.random().toString(),
        title,
        description,
        numOfPeople,
        ProjectStatus142.Active
      );

      this.projects.push(newProject);

      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice()); // 複製一份物件
      }
    }

    // 移動項目
    moveProject(projectId: string, newStatus: ProjectStatus142) {
      const project = this.projects.find((prj) => prj.id === projectId); // 0開始找 返回滿足條件的 第一個值
      // 判斷 當前放置區塊的 狀態不同
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners();
      }
    }

    // 更新項目
    private updateListeners() {
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice()); // 複製一份物件
      }
    }
  }

  export const projectState142 = ProjectState142.getInstance(); // 處理共用一個狀態管理 保證使用完全相同的對象
}
