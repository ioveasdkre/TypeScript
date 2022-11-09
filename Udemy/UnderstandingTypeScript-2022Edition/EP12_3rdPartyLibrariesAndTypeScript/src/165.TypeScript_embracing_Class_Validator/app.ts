import { Product2 } from "./product.model";
import { validate } from "class-validator";

const newProd2 = new Product2("", -5.99);
validate(newProd2).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd2.getInformation());
  }
});
