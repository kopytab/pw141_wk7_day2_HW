console.log("linked")


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

function favoriteFoods(object) {
    return Object.values(object)
}


console.log(favoriteFoods(person3))


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


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = function(){
        console.log(`This persons name is ${name} and they are ${age} years old`)
    }

    this.plusOneYear = (age) => {
        this.age += 1;
    };

    this.plusThreeYears = (age) => {
        this.age += 3
    };
}

let dylan = new Person('Dylan', 30)

let paden = new Person('Paden', 34)

dylan.printInfo()
paden.printInfo()

dylan.plusOneYear()

dylan.printInfo()

console.log(dylan)

paden.plusThreeYears()

console.log(paden)


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


let strLength = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length >= 10){
            resolve(str);
            
        } else {
            reject(str);
            
        }
    })
}

strLength('catsssssss').then( (result) => {
    console.log('Big word')
}).catch( (result) => {
console.log('Small number')
})


// Code Wars problems

// Find the sum of positive numbers in an array

function positiveSum(arr) {
    let sum = 0
      for (let i = 0; i < arr.length; i ++ ) {
        if (arr[i] > 0){sum = sum + arr[i]}
      } return sum
  }

// convert an array of 10 integers into a phone number. example: (123) 456-7891

function createPhoneNumber(n){
    return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
  }

  // just looking at that hurts my eyes but it works