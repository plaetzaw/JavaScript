// console.log(x);

// var x = "hi";

///Var vs Let///
// function varTest() {
//   var x = 31;
//   if (true) {
//     var x = 71; // same variable!
//     console.log(x); // 71
//   }
//   console.log(x); // 71
// }
// varTest();

// function letTest() {
//   let x = 31;
//   if (true) {
//     let x = 71; // different variable
//     console.log(x); // 71
//   }
//   console.log(x); // 31
// }
// letTest();

// var i = 0;
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("outside", i);

// let i = 0;
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log("outside", i);

//ES5
// var text = "This string contains \"double quotes\" which are escaped.";

// //ES6
// let text = `This string contains "double quotes" which don't need
// to be escaped anymore.`;

// const name = "Tiger";
// const age = 13;
// console.log(`My cat is named ${name} and is ${age} years old.`);

// let today = new Date();
// let text = `The time and date is ${today.toLocaleString()}`;
// console.log(text);
// console.log(`Today's date is ${today.toLocaleDateString()}`);

// let myArray = [1, 3, 4, 7, 8];
// // let [a, b, c, d, e] = [4, 2, 5, 99, 21];
// let [a, b, c, d, e] = myArray;

// console.log(a);
// console.log(b);
// console.log(c);

// // let a = myArray[0];
// // console.log(a);
// // let b = myArray[1];

// var luke = { occupation: "jedi", father: "anakin" };
// let job = luke.occupation;
// let father = luke.father;

// function HelloWorld() {
//   console.log("Hello World");
// }

// HelloWorld();

// // becomes

// let HelloWorld = () => {
//   console.log("Hello World");
// };

// HelloWorld();

// let methodName = (params) => {

// }

// setTimeout(function() {
//   console.log("hello world");
// }, 1000);

// console.log("print this first");

// function getType() {
//   console.log("Type is: " + this.type);
// }
// console.log(getType());

// let nums = [1, 3, 5, 7, 8];
// let newArray = nums.map(num => {
//   return num * 2;
// });
// console.log(nums);
// console.log(newArray);

// let obj = {
//   x: 5,
//   y: 20,
//   z: 3
// };

//Incorrect
// let Multip = array => {
//   let mult = array.map(element => element[0] * [1] * [2]);
//   console.log(mult);
// };
// Multip(obj);

// let multiply = object => {
//   let(x, y, z) = object;
//   return x * y * z;
// };
// console.log(multiply(obj));

// ES5
// let addTwoNumbers = (a, b) => {
//   a = a || 0;
//   b = b || 0;
//   return a + b;
// };

// let result = addTwoNumbers(2);
// console.log(result);

// ES6;
// let addTwoNumbers = (a = 0, b = 0) => {
//   return a + b;
// };
// let result = addTwoNumbers(2);
// let result1 = addTwoNumbers(3, 5);
// let result2 = addTwoNumbers();
// console.log(result, result1, result2);

//Rest Paramters
//ES5
// let multiplyNums = () => {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// };

// multiplyNums(4, 6, 7, 9);

// ES6
// let multiplyNums = (...args) => {
//   let m = 1;
//   for (let i of args) {
//     m = m * i;
//     console.log(m);
//   }
// };
// multiplyNums(4, 6, 7, 9);

// let array1 = [5, 7, 9, 11];
// let array2 = [...array1];
// array2.push(8, 10);
// console.log(array2);

// let a, b, c, d, array;
// a = [1, 2];
// b = [3, 4];
// c = [5, 6];
// d = [7, 8];

// array = [0, ...a, ...b, ...c, ...d, 9, 10];

// console.log(array);

//Swap Value

// let a, b;
// a = "first";
// b = "second";

// [b, a] = [a, b];
// console.log(a, b);

//Terenary operators
// let a = 3;

// if (a == 4) {
//   console.log(`a is equal to 4`);
// } else {
//   console.log(`a is not equal to 4`);
// }

//  (condition) ? (true block):(else[false] block)
// let a = 3;
// a == 4 ? console.log(`a is equal to 4`) : console.log(`a is not equal to 4`);

//Classes and Inheritence
// class Parent {
//   parentGreeting() {
//     console.log(`I'm a parent!`);
//   }
// }

// class Person extends Parent {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.count = 0;
//   }
//   greeting = () => {
//     console.log(`Hello, ${this.firstName} ${this.lastName}!`);
//     this.count++;
//   };
//   printCount = () => {
//     console.log(this.count);
//   };
// }
// let Plato = new Person("Plato", "Hangry", "29");
// console.log(Plato.age, Plato.firstName);
// console.log(Plato.age, Plato.firstName);
// Plato.greeting();
// Plato.greeting();
// Plato.greeting();
// Plato.printCount();
// Plato.parentGreeting();

//Super using RPG Game Classes
// class Character {
//   constructor(health, power) {
//     this.health = health;
//     this.power = power;
//   }
//   attack = enemy => {
//     enemy.health = -this.power;
//   };
//   print = () => {
//     console.log(
//       `The health of the ${this.name} is ${this.health} and the power is ${this.power}`
//     );
//   };
// }

// class Hero extends Character {
//   constructor(health, power) {
//     super(health, power);
//     this.name = "Hero";
//   }
// }

// class Goblin extends Character {
//   constructor(health, power) {
//     super(health, power);
//     this.name = "Goblin";
//   }
// }
// let hero = new Hero(10, 4);
// let goblin = new Goblin(7, 2);
// hero.attack(goblin);
// goblin.attack(hero);
// hero.print();
// goblin.print();

class Todos {
  constructor(description) {
    this.description = description;
  }
}

class TodosManager {
  constructor() {
    this.todoArray = [];
  }
  addTodo = description => {
    let todo = new Todos(description);
    this.todoArray.push(todo);
  };
  displayTodos = () => {
    //DOM logic to display
  };
}

let manager = new TodosManager();
manager.addTodo(description);
