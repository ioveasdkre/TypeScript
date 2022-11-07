// extends 泛型限制
// keyof   Object中的 Key
function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

extractAndConvert({ name: "Max" }, "name");
