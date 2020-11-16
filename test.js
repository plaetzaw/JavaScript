// Write a function that accepts two arguements, an array of integers and a single integer, \
//and checks to see if the single value is in the array once and only once. Returns a boolean.

function filterArray (array, target){
    let repeat = array.filter(item => item === target)
    if (repeat.length === 1){
        return true
    } else {
        return false
    }
}

//testing
console.log(filterArray([1,2,3,4,5,6,6,7], 7));
console.log(filterArray([1,2,3,4,5,6,6,7], 6));
console.log(filterArray([1,2,3,4,5,6,6,7], 0));

// Given the list of students below, filter and display the students that have a GPA above 3

let students = [
    {
      name: "Jessica",
      grade: 3.5,
    },
    {
      name: "Adam",
      grade: 2.4,
    },
    {
      name: "Evan",
      grade: 4,
    },
    {
      name: "George",
      grade: 3.2,
    },
    {
      name: "Heather",
      grade: 1.5,
    },
    {
      name: "Jessica",
      grade: 3.5,
    },
    {
      name: "Mark",
      grade: 3.6,
    },
  ];

function studentGrades(array, target){
    let notFailures = array.filter(kid => kid.grade > target)
    return notFailures
}
console.log(studentGrades(students, 3.2));


function getNumber(number){
    if (number % 3 === 0 && number % 5 === 0){
      return "BOTH"
    }
    else if (number % 3 === 0){
      return "THREE"
    }
    else if (number % 5 === 0){
      return "FIVE"
    }
    else 
      return number
  };
  
  function getNumberRange(first, last){
let result = []
   if (last <= 0){
    for (let i = first;  i >= last; i--){
        result.push(getNumber(i));
    }
   return result 
   } else { 
   for (let i = first; i <= last; i++){
     result.push(getNumber(i));
   }
   return result
}
  };

console.log(getNumberRange(1,15));
console.log(getNumberRange(1,-15));