interface Lengthy {
  length: number;
}

// extends 泛型限制
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (descriptionText.length === 1) descriptionText = `Got 1 elements`;
  else if (descriptionText.length > 1)
    descriptionText = `Got ${element.length} elements`;
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Hi there!", "Benson", "Y"]));
