// problem 1
// შექმენით ფუნქცია რომელიც დააბრუნებს რიცხვი კენტია თუ ლუწი

function isEven(number) {
  return number % 2 ? "რიცხვი კენტია" : "რიცხვი ლუწია";
}
console.log(isEven(5));

// problem2
// შექმენით ფუნქცია რომელიც მომხმარებელს შეეკითხება საკუთარ სახელს და შემდეგ დააბრუნებს მას.
//კონსოლში გამოიტანეთ რა შეიყვანა მომხმარებელმა
// (მომხმარებლისგან ინფორმაციის მისაღებად გამოიყენეთ prompt() ფუნქცია,)
// (კონსოლში დასაბეჭდათ გამოიყენეთ console.log() ფუნქცია )

function promptName() {
  return prompt("რა გქვიათ?");
}
console.log(promptName());
// problem 3
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს რიცხვი, თუ კენტ რიცხვს შეიყვანს კონსოლში დაბეჭდეთ
// რომ მომხმარებელმა შეიყვანა კენტი რიცხვი თუ ლუწს შეიყვანს მაშინ შესაბამისად კონსოლში დაბეჭდეთ
// რომ მომხარებელმა შეიყვანა ლუწი რიცხვი.
// (მომხმარებლისგან ინფორმაციის მისაღებად გამოიყენეთ prompt() ფუნქცია,)
// (კონსოლში დასაბეჭდათ გამოიყენეთ console.log() ფუნქცია )

if (Number(prompt("შეიყვანეთ რიცხვი")) % 2) {
  console.log("მომხმარებელმა შეიყვანა კენტი რიცხვი");
} else {
  console.log("მომხმარებელმა შეიყვანა ლუწი რიცხვი");
}

// problem 4
// კონსოლში დაბეჭდეთ 1-100 მდე ყველა ლუწი რიცხვი
for (let i = 2; i < 100; i = i + 2) {
  console.log(i);
}

// problem 5
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს რიცხვები მანამ სანამ არ შეიყვანს უარყოფით რიცხვს

for (;;) {
  let promptN = Number(prompt("შეიყვანეთ რიცხვი"));
  if (promptN < 0) {
    break;
  }
}

// problems 6
let numbers = [10, 12, 42, 55, 100, 90, 32, 55];
let result = [];
// numbers მასივში იპოვეთ რიცხვები რომელიც იყოფა 5-ზე ლუპის საშუალებით,
// შეინახეთ result მასივში.
for (let i of numbers) {
  if (i % 5 == 0) {
    result.push(i);
  }
}
console.log(result);

// problem 7
let names = ["Gio", "Luka", "Nika", "Ani", "Eka", "Nini", "Sopo"];
// კონსოლში დაბეჭდეთ names მასივში არსებული ყველა ელემენტი, გამოტოვეთ მხოლოდ ნიკა.
// ლუპის საშუალებით.

for (let i of names) {
  if (i == "Nika") {
    continue;
  }
  console.log(i);
}

//problem 8

//შექმენით ფუნქცია რომელიც პარამეტრად მიიღებს მასივს რომელშიც იქნება მინიმუმ 5 user-ის ობიექტი
// user ობიექტი უნდა ქონდეს შემდეგი properties სახელი,გვარი,სქესი,ასაკი.
// თუ ფუნქციაში გადაცემულ პარამეტრში არ იქნებ მინიმუმ 5 მომხმარებელი დააბრუნეთ წინადადება: "მასივში აუცილებლად უნდა იყოს მინიმუმ 5 მომხმარებელი"
// თუ მინიმუმ 5 მომხმარებელი იქნება დააბრუნეთ თითოეული მათგანის სრული სახელი, გვარი და ასაკი.
// (array.length გამოიყენეთ იმისთვის რომ გაიგოთ არის თუ არა მასივში შესაბამისი რაოდენობის ელემენტი)

//problem 9
// დაწერეთ ფუნქცია რომელიც დააბრუნებს გადაცემული მომხმარებლის ობიექტი ადმინი არის თუ არა
const user = {
  isAdmin: true,
};
const user1 = {
  isAdmin: false,
};
function isAdmin(key) {
  if (key.isAdmin === true) {
    return "Admin";
  } else {
    return "is not admin";
  }
}
console.log(isAdmin(user1));

// problem 10

// დაწერეთ ფუნქცია რომელიც იპოვის და დააბრუნებს მასივში ყველაზე დიდ რიცხვს.

const numbers1 = [
  1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
  70, 34, 43, 189,
];
function MaxNumb() {
  let maxNumber = numbers1[0];
  for (let i of numbers1) {
    if (maxNumber < i) {
      maxNumber = i;
    }
  }
  return maxNumber;
}
console.log(MaxNumb());

// problem 11

// დაწერეთ ფუნქცია რომელიც იპოვის და დააბრუნებს მასივში ყველაზე პატარა რიცხვს.

const numbers2 = [
  1, 4, 2, 14, 90, 13, 2, 0, 78, 199, 12, 313, 315, 789, 31, 12, 1, 1, 3467, 90,
  70, 34, 43, 189,
];

function MinNum() {
  return Math.min(...numbers2);
}
console.log(MinNum());
