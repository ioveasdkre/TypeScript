namespace App {
  // Drag & Drop Interfaces 拖放界面
  /**
   * @type {dragStartHandler(event: DragEvent): void} 拖曳開始
   * @type {dragEndHandler(event: DragEvent): void} 拖曳結束
   */
  export interface Draggable142 {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  /**
   * @type {dragOverHandler(event: DragEvent): void} 元素或文本選擇被拖動到有效的放置目標上時（每幾百毫秒），將觸發該事件
   * @type {dropHandler(event: DragEvent): void} 元素或文本選擇被放置在有效 放置目標上時，將觸發該事件
   * @type {dragLeaveHandle(event: DragEvent): void} 拖動的元素或文本選擇離開有效的放置目標時會觸發該事件
   */
  export interface DragTarget142 {
    dragOverHandler(event: DragEvent): void;
    dropHandler(event: DragEvent): void;
    dragLeaveHandle(event: DragEvent): void;
  }
}
