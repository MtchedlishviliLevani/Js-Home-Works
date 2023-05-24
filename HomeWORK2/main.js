// Problem 1
const car = {
  Color: "Black",
  Model: "F10",
  Manufacturer: "BMW",
  engine_Volume: 3.0,
};

console.log(car["Model"]);
console.log(car.Color);

// Problem 2
delete car.engine_Volume;
car.owner = "Levan Mtchedlishvili";
console.log(car);

// problem 3

const names = ["Levani", "Nika", "Saba", "Luka", "Nini"];
console.log(names[2]);
names.push("Sofo");
names.shift();
