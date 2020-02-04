// 1. Madlib
var name = "Alex";
var subject = "Physical Education";

console.log(name + "'s favorite subject in school is " + subject);

// 2. Tip Calculator

function tipAmount(bill, tip) {
  switch (tip) {
    case "good":
      total = bill + bill * 0.2;
      return total;
      break;

    case "fair":
      total = bill + bill * 0.15;
      return total;
      break;

    case "bad":
      total = bill + bill * 0.1;
      return total;
      break;
  }
}
console.log(tipAmount(100, "good"));

// Tip Calculator 2
function totalAmount(bill, tip) {
  switch (tip) {
    case "good":
      total = bill * 0.2;
      return total;
      break;

    case "fair":
      total = bill * 0.15;
      return total;
      break;

    case "bad":
      total = bill * 0.1;
      return total;
      break;
  }
}
console.log(totalAmount(100, "good"));

// 4. Print Numbers
function printNumbers() {
  for (var i = 1; i <= 10; i++) {}
}
console.log(printNumbers(1, 10));
