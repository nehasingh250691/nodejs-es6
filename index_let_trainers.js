/**
 * ES 6 features
 *  >let and const
 *  scope:
 *   >Global scope  -Gobal Context
 *         Global Context --- Window - In browser
 *         Global Context ----process -Node
 *   In order to fix the problem of Global scope
 *   Design patterns were proposed
 *   >AMD   - Dojo
 *   >COMMONJS  - require.js
 *   >ES 6 Module Design  = ECMA 2012 =AMD+COMMONJS
 *               ->webpack loader
 *               -->commonjs loaders
 *   >UMD  = ES6 Best Practices
 *     >system.js - loader
 *
 * lint - static code anys tool.
 *
 *   >Function scope
 *      anything inside function
 *   >Object Scope
 *      anything inside object with this keyword
 *   >block scope
 *      if(test){
 *         var i=10
 *     }
 *
 * +In Node scope:
 *   >Module scope
 */
// variable declaration
// var
// i - variable
// 10 - literal
// string,number,boolean,undefined,NaN,Infintity,function,null,object

// var i = 10
const i = 10
console.log(typeof i)
// i = "Subramanian"
// console.log(typeof i)
// string
const fname = 'Subramanian'
console.log(fname)
const address = 'Chennai'
console.log(address)
// es 6 template literal
const lname = 'M'
// const fullName = fname + lname
// es 6 template literal syntax
const fullName = `Full Name is ${fname} ${lname}`
console.log(fullName)
// //
const isWorking = true
console.log(isWorking)
let salary // undefined: the variable does not have valid literal
console.log(salary)
let totalSalary = salary * 1000
// NaN -Not a Number: it is numerial error code.
console.log(totalSalary)
// Infinity : div by 0
let avgScore = 5 / 0
console.log(avgScore)
// /////////////////////////////////////////////////////

// falsy literals
// null,undefined,NaN,0,"",false

let status = 'completed'

/* if (status) {
    console.log('You got Price!')
} else {
    console.log('Better luck next time')
}
 */
let result = status ? 'You got Price!' : 'Better luck next time'
