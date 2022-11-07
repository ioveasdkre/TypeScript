// 介面
interface Greetable75 {
  readonly name: string;

  greet(phrase: string): void;
};

// implements 實踐
class Person75 implements Greetable75 {
  name: string;
  age = 30;

  constructor(n: string){
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

let user75: Greetable75;

user75 = new Person75("Max test");
// user75.name = "max"; // Error 因 readonly
