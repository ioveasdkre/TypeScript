const add50 = (a: number, b: number) => a + b;

const printOutut50: (a: number | string) => void = (output) =>
  console.log(output);

const button50 = document.querySelector("button");

if (button50) {
  button50.addEventListener("click", (event) => console.log(event));
}
