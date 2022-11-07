const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["hiking", ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = {...person}; // 創建副本

console.log(copiedPerson);