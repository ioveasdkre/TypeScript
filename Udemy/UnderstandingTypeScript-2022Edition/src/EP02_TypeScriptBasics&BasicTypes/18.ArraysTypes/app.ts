const person18 = {
    hobbies: ["Sports", "Cooking"],
};

let favoriteActivities18: any[];
favoriteActivities18 = ["Sports", 1];

for (const hobby of person18.hobbies) {
    console.log(hobby.toUpperCase()); // 英文轉大寫並輸出
    // console.log(hobby.map()); // !!! ERROR 因為他是 string而非陣列!!!
}
