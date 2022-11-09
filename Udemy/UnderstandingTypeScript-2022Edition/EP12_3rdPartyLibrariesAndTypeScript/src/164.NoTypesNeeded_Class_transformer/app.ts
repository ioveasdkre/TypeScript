import { Product } from "./product.model";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";

const products = [
  { title: "A Carpet", price: 32.99 },
  { title: "A Book", price: 1.5 },
];

// const p1 = new Product("A Book", 12.99);
// console.log(p1.getInformation());

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products); // 物件轉換成 class

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
