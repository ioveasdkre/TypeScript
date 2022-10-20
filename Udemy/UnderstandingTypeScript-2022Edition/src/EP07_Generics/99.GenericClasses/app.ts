// 簡單的泛型範例
// class DataStorage99<T extends string | number| boolean> {
class DataStorage99<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage99 = new DataStorage99<string>();
textStorage99.addItem("Max");
textStorage99.addItem("Benson");
textStorage99.removeItem("Max");

console.log(textStorage99.getItems());

const numberStorage99 = new DataStorage99<number>();

const objectStorage99 = new DataStorage99<object>();
objectStorage99.addItem({ name: "Max" });
objectStorage99.addItem({ name: "Benson" });
// ...
objectStorage99.removeItem({ name: "Max" });

console.log(textStorage99.getItems());
