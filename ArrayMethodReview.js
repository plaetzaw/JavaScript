const players = [
    {name: 'JSTN', power: 6969},
    {name: 'Deevo', power: 520},
    {name: 'Turbo', power: 54321},
    {name: 'Firstkilla', power: 1100},
    {name: 'Kronovi', power: 1250},
    {name: 'JKnaps', power: 2500},
    {name: 'Scrubkilla', power: 201},
    {name: 'Rizzo', power: 4209},
    {name: 'Chicago', power: 1600},
]
const playerlist = ["Kro", "OZ", "Plato", "Rizzo", "Saqneo", "Computitan", "TheStickface"]
//Filter
//Useful for looking for items that satisfy a certain condition
const lessthan2000 = players.filter((player) => {
    return player.power <= 2000 
})
console.log(lessthan2000)

//Map
//I use this all the time in React for 'mapping' results from JSON to the page
//Useful for returning certain results from an array, or converting one array into another array
const mapPlayers = players.map((player) => {
    return player.power
})
console.log(mapPlayers)

//Find
//Allows you to find a single object in an array
const findPlayer = players.find((player) => {
    return player.name === 'Rizzo'
})
console.log(findPlayer)

//forEach
//Does not return anything. Avoids having to run through a for loop syntax
players.forEach((player) => {
    console.log(player.power)
})

//Some
//Returns a boolean, as soon as the condition is met, it will return True. If condition is not met, it'll return false
const haveHighPower = players.some((player) => {
    return player.power >= 99999
})
console.log(haveHighPower)

//Every
//Same method as some, except it will check to make sure EVERY item fulfills the requirements
const allHighPower = players.some((player) => {
    return player.power > 200
})
console.log(allHighPower)

//Reduce
//Cumulative operation on every item in the array
const totalPower = players.reduce((playerPower, player) => {
    return player.power + playerPower
}, 0)
console.log(totalPower)

//Includes
const includesList = playerlist.includes("Rizzo")
console.log(includesList)