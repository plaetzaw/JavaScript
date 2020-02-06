//1. Positive Numbers
var AllNums = [1, -2, 3, -4, 5];
var PositiveNums = [];
function Positive(nums) {
  for (var x = 0; x < nums.length; x++) {
    if (nums[x] > 0) {
      PositiveNums.push(nums[x]);
    }
  }
  console.log(PositiveNums);
}
Positive(AllNums);

//2. Even
var AllNums = [1, -2, 3, -4, 5];
var EvenNums = [];
function Evens(nums) {
  for (var x = 0; x < nums.length; x++) {
    if (nums[x] % 2 == 0) {
      EvenNums.push(nums[x]);
    }
  }
  console.log(EvenNums);
}
Evens(AllNums);

//3. Squaring
var AllNums = [1, 2, 3, 4, 5];
var SquareNums = [];
function Squares(nums) {
  for (var x = 0; x < nums.length; x++) {
    var doubled = nums[x] * nums[x];
    SquareNums.push(doubled);
  }
  console.log(SquareNums);
}
Squares(AllNums);

//4. Cities 1
var cities = [
  { name: "Los Angeles", temperature: 60.0 },
  { name: "Atlanta", temperature: 52.0 },
  { name: "Detroit", temperature: 48.0 },
  { name: "New York", temperature: 80.0 }
];

const tempedCities = cities.filter(element => element.temperature < 70);
console.log(tempedCities);

//5. Cities 2
var cities = [
  { name: "Los Angeles", temperature: 60.0 },
  { name: "Atlanta", temperature: 52.0 },
  { name: "Detroit", temperature: 48.0 },
  { name: "New York", temperature: 80.0 }
];

function cityM(element) {
  const cityNames = cities.map(element => element.name);
  console.log(cityNames);
}
cityM(cities);

//6. Good Job!
var people = [
  "Dom",
  "Lyn",
  "Kirk",
  "Autumn",
  "Trista",
  "Jesslyn",
  "Kevin",
  "John",
  "Eli",
  "Juan",
  "Robert",
  "Keyur",
  "Jason",
  "Che",
  "Ben"
];

function good(array) {
  for (var x = 0; x < array.length; x++) {
    console.log("Good Job " + array[x] + "!");
  }
}
good(people);

//. 7 Sort an Array
function sorted(array) {
  let sorted = array.sort();
  console.log(people);
}
sorted(people);

//. 8 Sort an Array 2

people.sort(function(a, b) {
  return a.length - b.length;
});
console.log(people);

//. 9 Sort an Array 3

var arr = [
  [1, 3, 4],
  [3, 6],
  [2, 4, 6, 8]
];

let sum = function(array) {
  let result = 0;
  for (i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result;
};

arr.sort(function(a, b) {
  return sum(a) - sum(b);
});

console.log(arr);

//10. 3 Times
function call3Times(fun) {
  fun();
  fun();
  fun();
}

function fun() {
  console.log(fun);
}
call3Times("Hello world!");
