interface Named76 {
  readonly name: string;
}
// 介面
interface Greetable76 extends Named76 {
  greet(phrase: string): void;
}

// implements 實踐 可實作多個介面
// class Person76 implements Greetable76, Named76 {
class Person76 implements Greetable76 {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

let user76: Greetable76;

user76 = new Person76("Max test");
