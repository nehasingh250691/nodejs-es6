/**
 * Functions are first class Citizens
 * Functions are literals,Objects
 * Functions are spcial objects -Callbable objects
 * Fuctions can be declared in many ways
 * functions can be called many ways
 */
//Function declarations
function sayHello() {
    console.log('Hello')
}
//invoke the function
sayHello();
//FUnction expressions 

//function declartion//es 5 function
/* const hai = function (name='default') {
    //console.log('Hai' + name);
    return name;
}; */
//Execution context
//console.log(hai('Subramanian')); // one way
/* //context switch
hai.apply(); // stack
hai.call();  //stack
let a = hai.bind(); // lazy innovaction
a(); */
//Arrow function : code simplfication
/* const hai = (name='default')=> {
    console.log('Hai' + name);   
}; */
//single parameter /only one body
//const hai = (name='default')=>  console.log('Hai' + name);   
/* const hai = (name = 'default') => {
    return name;
} */
//const hai = (name = 'default') =>name;
//singleparameter no default value and return

//const hai = name => name;

//console.log(hai('subramanian'));
///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//How to pass function as parameter?

const display = (greeter) => {
    greeter();
};
const connectToServer = cb => {
    //event emssion code
    let dataevent = true;
    if (dataevent) {
        var response = 'fake Response'
        cb(response);
    }
};
const handleData = data=>console.log(data);

connectToServer(handleData);
connectToServer(data=>console.log('data ready' + data));

//passing function as value

let mygreeter = () => console.log('Greeter!');

display(mygreeter);

display(() => console.log('Welcome'));