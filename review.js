//ES6 Arrow Functions

//Old
function sum(){
    return a+b
}
//ES6
let sum2 = (a,b) => a + b

//Old
function isPositive(num){
    return num >= 0
}
//ES6 
let isPositive2 = num => num >= 0

//Old
function randomNum(){
    return Math.random
}
//ES6
let randomNum2 = () => Math.random

//Old
document.addEventListener('click', function() {
    console.log('click')
})
//ES6
document.addEventListener('click', () =>  console.log('click'))


// .this review
class Person{
    constructor(name){
        this.name = name
    }

    printNameArrow(){
        //Keeps the scoping for this
        setTimeout(() => {
            console.log('Arrow ' + this.name)
        }, 100)
    }

    printNameFunction(){
        //Does not since its an anonymous function
        setTimeout(function() {
            console.log('Function ' + this.name)
        }, 100)
    }
}

let Ragnarok = new Person('Ragnarok')
Ragnarok.printNameArrow()
Ragnarok.printNameFunction()