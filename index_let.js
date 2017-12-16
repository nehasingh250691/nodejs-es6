/*
 * ES 6 features
 *  > let and const
 *  > global or context scope - Global Context 
 *          Global Context  <--- Window - In browser
 *          Global Context <--- process - In Node (process has referenec of Global Context )
 *    In order to fix the problem of Global scope Design patterns  were proposed ----
 *          > AMD  - Dojo
 *          > COMMONJS - require.js
 *          > ES 6 Module Design => ECMA 2012  (proposed this as part of core language => AMD+COMMONJS BEST PRACTICES)
 *                        -- Webpack loader
 *                        -- commonjs loader
 *          > UMD  = ES6 Best Practices
 *                        -- system.js - loader
 * 
 * lint - static code analysis tools (code quality - i.e. a variable is declared but never used warning)
 * // 'use strict' - Language level lint tool is enabled 
 * 
 *  > function scope
 *              --anything inside a function using this keyword
 *  > block scope
 *         -- if(test){
 *                 var i = 10; // this can be accessed outside this block , use iffi pattern before es6 
 *          }
 *  > Object scope
 *         --anything inside an object using this keyword
 *  +In Node Scope
 *      > Module scope 
 *          --default scope is not global, whatever is written in one program can't be accessed in another
 *          --when there is need to share code, use module.exports 
 */

 //var
 // i = variable
 // 10 - literal
// there are 9 literls = string, number , boolean , null, undefined, function, NaN, Infinity, object
var i = 10;
console.log(typeof i); // number
i = "Hello World!";
console.log(typeof i); // string 
// Use es6 const so that noone can override the value

//string
const fname = 'Neha';
console.log(fname);
const address = "Neha";
console.log(address);
//es6 template variable 
const lname = 'Singh';
//const fullname = fname +lname;
// es6 template literal syntax
const fullname = `Full name is ${fname} ${lname}`;
console.log(fullname);

///// boolean const
const isWorking = true;
console.log(isWorking);
let salary; // undefined : the variable doesn't have valid lietral 
console.log(salary);
let totalSalary = salary * 100;
// NaN - Not a number : it is numerical error code
console.log(totalSalary);

//Infinity: div by 0
let avgScore =  10/0;
console.log(avgScore);

/**
 * /////////////////////////////////////////////Truthy/falsy literals//////////////////////////////////////////////////////////
 */

// falsy literals 
// null, undefined, NaN, 0 , '', false

 let status = 'completed';
 if(status){
    console.log('You got Price!')
 } else{
     console.log('Better luck next time')
 }

 
/**
 * /////////////////////////////////////////////////ternary operator//////////////////////////////////////////////////////
 */



 var x = 100; // browser it will be associted with global, private in node
 //------------------ NODE uses something like this to make it private-----------
(
    var x = 100;
)


