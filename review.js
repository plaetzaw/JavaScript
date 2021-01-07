//ES6 Arrow Functions

//Old
function sum(){
    return a+b
}
//ES6
let sum = (a,b) => a + b

//Old
function isPositive(num){
    return num >= 0
}
//ES6 
let isPositive = num => num >= 0

//Old
function randomNum(){
    return Math.random
}
//ES6
let randomNum = () => Math.random

//Old
document.addEventListener('click', function() {
    console.log('click')
})
//ES6
document.addEventListener('click', () =>  console.log('click'))