interface Named78 {
  readonly name?: string;
  outputName?: string;
}

// 介面
interface Greetable78 extends Named78 {
  greet(phrase: string): void;
}

// implements 實踐 可實作多個介面
// class Person78 implements Greetable78, Named78 {
class Person78 implements Greetable78 {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log("Hi");
    }
  }
}

let user78: Greetable78;

user78 = new Person78();

user78.greet("Hi there - I am");
