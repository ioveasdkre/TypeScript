// PropertyDescriptor 屬性描述符
function Autobind114(
  _: any, // target
  _2: string, // methodName
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true, // 可配置(可更改)
    enumerable: false, // 可列舉
    // getter 唯讀
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjDescriptor;
}

class Printer114 {
  message = "This works!";

  @Autobind114
  showMessage() {
    console.log(this.message);
  }
}

const printer114 = new Printer114();
printer114.showMessage();

const button114 = document.querySelector("button")!;
// 需先註解 @Autobind114
// button114.addEventListener("click", printer114.showMessage.bind(printer114)); // bind 綁定函式
button114.addEventListener("click", printer114.showMessage); // bind 綁定函式
