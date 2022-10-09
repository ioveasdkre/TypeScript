const hobbies54 = ["Sports", "Cooking"];
const activeHobbies54 = ["hiking", ...hobbies54];

const person54 = {
  firstname: "Max",
  age: 30,
};

// const hobby1 = hobbies54[0];
// const hobby2 = hobbies54[1];
const [hobby1, hobby2, ...remainingHobbies] = hobbies54;

console.log(hobbies54, hobby1, hobby2);

const { firstname: userName, age} = person54; // 解構式 陣列中的變數取出來可用 :新名稱 的方式重新命名

console.log(userName, age, person54);