//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i=0; i<Object.keys(person3).length; i++){
    if(Array.isArray(Object.values(person3)[i])){
        console.log(`${Object.keys(person3)[i]}:`)
        for(let j=0; j<Object.values(person3)[i].length; j++){
            if(Object.values(person3)[i][j].constructor == Object){
                for(let k=0; k<Object.values(person3[Object.keys(person3)[i]][0]).length; k++){
                    console.log(`  -  ${Object.keys(person3[Object.keys(person3)
                        [i]][j])[k]}: ${Object.values(person3[Object.keys(person3)[i]][j])[k]}`)
                }
            } else {console.log(`  -  ${Object.values(person3)[i][j]}`)}
        }} else {console.log(`${Object.keys(person3)[i]}: ${Object.values(person3)[i]}`)}
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `Meet ${this.name}; this person is ${this.age} years old!`
    }

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    this.addAge = () => {
        this.age += 1
        return `${this.name} is now ${this.age}`
    }

}

let person_1 = new Person('John', 23)
let person_2 = new Person('Edna', 87)

console.log(person_1.printInfo())
console.log(person_1.addAge())
console.log(person_1.addAge())
console.log(person_1.addAge())
console.log(person_1.printInfo())
console.log(person_2.printInfo())
console.log(person_2.addAge())
console.log(person_2.printInfo())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten, console log "Big word". 
    If the length of the string is less than 10, console log "Small Number"
*/

const isBigString = (str) => {
    return new Promise( (resolve, reject) => {
        if(str.length > 10){
            resolve(true)
        } else {
            reject()
        }
    })
}

isBigString('assymetrical')
    .then( () => {
        console.log("Big word")
    })
    .catch( () => {
        console.log("Small string")
    })