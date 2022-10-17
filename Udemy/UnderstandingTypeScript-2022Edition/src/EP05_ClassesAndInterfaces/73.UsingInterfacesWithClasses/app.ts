// 介面
interface Greetable73 {
  name: string;

  greet(phrase: string): void;
};

// type Person73 = {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// implements 實踐
class Person73 implements Greetable73 {
  name: string;
  age = 30;

  constructor(n: string){
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

let user73: Greetable73;

user73 = new Person73("Max test");
user73.greet("Hi there - I am");
console.log(user73);
