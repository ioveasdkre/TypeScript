function Log109(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

class Product109 {
  @Log109
  title: string;
  private _price: number;

  // Setters 唯存
  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error("Invalid price - should be positive!");
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
