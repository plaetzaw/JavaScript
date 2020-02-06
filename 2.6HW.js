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
