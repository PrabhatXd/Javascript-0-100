const score = 5.3443
const myScore = new Number(2235.3221)
//  console.log(myScore)
// console.log(score);
// console.log(myScore.toString().length)
// console.log(myScore.toFixed(4)) // it required number as an argument for the decimal point

const hundreads = 10000
// console.log(hundreads.toLocaleString()); // to convert into the local numrical values 

//++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++==


// Absolute value
// console.log(Math) // it return an Object
// console.log(Math.abs(-4)) // Math.abs gives the absolute value

const Numbers = [1, 2, 3, -4, -5, 10]
const positiveNo = Numbers.map(Numbers => Math.abs(Numbers)) // map can be used in array 
// 
// console.log(Math.round(4.6)) // Math.round() -> Gives you the round of the decimal point 
// console.log(Math.ceil(4.6))  // Math.ceil() -> when you want the decimal should be higher
// console.log(Math.floor(4.6))  // Math.ceil() -> when you want the decimal should be lower

// console.log(Math.min(3,4,9,10,1,2)) // To find out the smallest no in the array 

const myNumbers = [2, 3, 5, 6, 10, 25, 50]
// const  smallestNO =Math.max(...myNumbers)
// console.log(smallestNO)
let smallestN0 = myNumbers[0]

for (i = 1; i < myNumbers.length; i++) {
    if (myNumbers[i] > smallestN0) {
        smallestN0=myNumbers[i]
    }

}
// console.log(smallestN0) this will give the smallest numvber 

// Example 2 



// console.log(Math.floor(Math.random()*10)) // Math.random generates random no in decimal points 

// +++++++++++++++++  Example of Math.Random +++++++++++++++++++++++++

// Pick random Item from any array 

let fruits=["Apple","Mango","Banana","Grapes","Watermellon"]
let MyFruits=fruits[Math.floor((Math.random()*fruits.length))]
// console.log(MyFruits)

// This will give you random names each time it will runs

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Simulate a coin toss

const toss=Math.random()<0.5 ? "Tails" : "Heads"
// console.log(toss)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min)) 