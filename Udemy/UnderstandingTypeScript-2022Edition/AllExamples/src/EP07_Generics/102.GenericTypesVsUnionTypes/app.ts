// 如果把犯行拿掉會有個問題 沒辦法統一類型 會得到一個混和的類型
// 此範例是根據 data的類型去做 增刪改查 若無法統一類型 就無法得到預期的結果
// 泛刑範例可參 99
class DataStorage102 {
  private data: (string | number | boolean)[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage102 = new DataStorage102();
textStorage102.addItem("Max");
textStorage102.addItem("Benson");
textStorage102.removeItem("Max");
// textStorage102.removeItem(10); // 不使用泛型 會導致無法統一類型

console.log(textStorage102.getItems());
