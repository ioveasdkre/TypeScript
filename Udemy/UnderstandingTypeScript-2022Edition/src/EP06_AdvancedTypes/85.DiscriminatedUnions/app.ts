interface Bird85 {
  type: "bird";
  flyingSpeed: number;
}

interface Horse85 {
  type: "horse";
  runningSpeed: number;
}

type Animal85 = Bird85 | Horse85;

function moveAnimal85(animal: Animal85) {
  let speed;

  // if(animal instanceof Bird85){ // Error
  if ("flyingSpeed" in animal) {
    console.log(`Moving with speed: ${animal.flyingSpeed}`);
  }

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving as speed: ${speed}`);
}

moveAnimal85({ type: "bird", flyingSpeed: 10 });
