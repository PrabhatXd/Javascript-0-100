const myDate=new Date() 

// +++++++ Methods ++++++++++
// console.log(myDate.toString())
// console.log(myDate.toUTCString())
// console.log(myDate.toISOString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate) // date is an object 

let newDate=new Date(2025,1,24)
let newDate1=new Date("2025-01-24") //yy-mm-dd
let newDate2=new Date("10-25-2025") // mm-dd-yy
//console.log(newDate.toDateString())

//let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(newDate.getTime()) // getTime() Gives value in Miliseconds

// console.log(Math.floor(Date.now()/1000)) // By divind into 1000 will give value in seconds 

let myNewdate=new Date()
//console.log(myNewdate.getMonth()+1); // .getDate metods gives todays Date 30 september
let hours=myNewdate.getHours()
let minutes=myNewdate.getMinutes()
let seconds=myNewdate.getSeconds()

let amPm=hours >=12 ? "PM" : "AM"
hours=hours%12      // hours will give  24 hours format  / so to convert into 12 hours format ( hours % 12 )
hours=hours ? hours : 12; // after  
// {

// if (hours) {
// hours = hours;  // keep the same value
// } else {
//   hours = 12;     // if 0, make it 12
// }

//} 

console.log(`Todays date is ${myNewdate.getDate()} and current time is ${Math.floor(myNewdate.getTime()/1000)}`);

if (hours) {
hours = hours;  // keep the same value
} else {
  hours = 12;     // if 0, make it 12
}