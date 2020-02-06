// function greeting(name) {
//   return "what's up " + name;
// }

// // let result = greeting("Plato");
// console.log(result);
// console.log(result());

// let greeting = function(name) {
//   return name;
// };

// console.log(greeting);

// let add = function(num1, num2) {
//   return num1 + num2;
// };

// let subtract = function(num1, num2) {
//   return num1 - num2;
// };

// let calc = function(num1, num2, opfunction) {
//   return opfunction(num1, num2);
// };
// let result = calc(3, 4, subtract);
// console.log(result);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// function cityM(element) {
//   const Zee = companies.map(element => element.retail);
//   console.log(Zee);
// }
// cityM(companies);

let newList = companies.filter(function(company) {
  return (company.category = "Retial");
});
console.log(newList);

let arr = [2, 5, 8, 9, 11];

let myBool = arr.some(function(num) {
  return num < 1;
});
console.log(myBool);
