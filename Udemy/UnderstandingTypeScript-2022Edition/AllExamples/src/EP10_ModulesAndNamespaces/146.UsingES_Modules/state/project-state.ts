import { Project146, ProjectStatus146 } from "../models/project.js";

// Project State Management
type Listener146<T> = (items: T[]) => void;

class State146<T> {
  protected listeners: Listener146<T>[] = []; // 監聽使用 用來傳遞資料給其他人 避免原始資料被改動(projects)

  addListener(listenerFun: Listener146<T>) {
    this.listeners.push(listenerFun);
  }
}

// Project State Management 管理狀態
export class ProjectState146 extends State146<Project146> {
  private projects: Project146[] = []; // 要顯示的資料
  private static instance: ProjectState146;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) return this.instance;

    this.instance = new ProjectState146();
    return this.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project146(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus146.Active
    );

    this.projects.push(newProject);

    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice()); // 複製一份物件
    }
  }

  // 移動項目
  moveProject(projectId: string, newStatus: ProjectStatus146) {
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

export const projectState146 = ProjectState146.getInstance(); // 處理共用一個狀態管理 保證使用完全相同的對象
