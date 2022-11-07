// 裝飾器作用域

function Log110(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function Log110_2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Property decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log110_3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log110_4(
  target: any,
  name: string | Symbol,
  position: number
) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product110 {
  @Log110
  title: string;
  private _price: number;

  @Log110_2
  // Setters 唯存
  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error("Invalid price - should be positive!");
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log110_3
  getPriceWithTax(@Log110_4 tax: number) {
    return this._price * (1 + tax);
  }
}

// 實例化 class並不影響裝飾器
const p = new Product110("test", 29);
const p2 = new Product110("test", 29);