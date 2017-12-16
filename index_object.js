/**
 * Types of objects
 * >Function object
 * >Non Functon Objects
 *    >constructor pattern
 *      >es 5 function
 *      >es 6 class
 *    >literal pattern
 */
//es 5 function
//object : instance variable + instance methods
//data initalization
/**
 * direct - hardcoded
 * after object creation
 * during object creation
 *    >Constructor overloading
 * Object relationship:
 *    >has-a
 *    
 *    >Is-a
 */

function Address(city = 'delhi') {
    this.city = city;
}
function Employee(id = 1, name = 'default',address=new Address()) {
    this.id = id; //1;
    this.name = name;
   //has-a
    this.address = address 
    
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//invoke 
let employee = new Employee(); //constructor call
//employee.name ='ram'
//access property
console.log(`ID ${employee.id}`);
console.log(`Name ${employee.name}`);
console.log(`Name ${employee.address.city}`);

console.log(`${employee.calculateSalary()}`);

//ES 6 Class

class Order{
    constructor(invoicevalue=100) {
        this.invoicevalue = invoicevalue;
    }
}
//es 6 inheritance
class Person{
    constructor() {
        console.log('Person constructor is called!');
    }
}

class Customer extends Person {
    constructor(id = 1, name = 'default', order = new Order()) {
        super();
        //instance variables
        this.id = id; //1;
        this.name = name; // 'Subramanian'
        //has-a
        this.order = order;
    }
    //methods
    calculateInvoice() {
        return 1000;
    }
}
const customer = new Customer(1, 'ram');
//customer.name = 'ram';
console.log(customer.id);
console.log(customer.name);
console.log(customer.order.invoicevalue);

console.log(customer.calculateInvoice());

//literal pattern : models :
const order = {
    id: 1,
    invoicevalue: 1000,
    product: 'iphone',
    //has-a : nested object
    shippingaddress: {
        city:'Mumbai'
    }
};

order.product = 'sony'
console.log(`${order.id} ${order.invoicevalue} ${order.product}`);
console.log(`${order.shippingaddress.city}`);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//object dynamic features:Object augmentation:
//Internal general structure of object is dictionary

function Welcome() {
    
}
let welcome = new Welcome();
//add new property after object creation
welcome.message = 'Hello';
//if property available,update else add
welcome.message = 'hai'; //
console.log(welcome.message);

let props = {};

props.name = 'Subramanian';
props.title = 'App';
console.log(props);




let todos = {
    text: 'Node'
};
Object.freeze(todos);
todos.text = 'Express';
todos.id = 1;
console.log(todos.text);
console.log(todos.id);

//Immutable api
function update(profile) {
    //mutable version
    //profile.name = 'Ram';
    //return profile;

    //immutable version
    return Object.assign({}, profile, { name: 'Ram' });

}

let profile = {
    id: 1,
    name: 'Subrammanian'
};
Object.freeze(profile);
let newProfile=update(profile);
console.log(newProfile);