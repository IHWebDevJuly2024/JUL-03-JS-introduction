// VARIABLES

// A place in memory where we store some data

// Data?

// PRIMITIVE DATA: strings, numbers, booleans, undefined, symbols, null ...

// NON-PRIMITIVE: Objects, Arrays, functions ...

// Primitive data types are stored in memory and they are not possible to modify directly.
"Mica";

let userName = "Marcel";
// what we can do if we store them in a variable is to change the VALUE of this variable.
userName = "Oriol";

console.log(userName);

// On the other hand. NON-primitive data types can be modified
const myArray = [1, 2, 3, 4, 5];

myArray.push(6);

console.log(myArray);

// Variables are little boxes where we store the data.

const welcomeMessage =
  "Hey! welcome to the page user! I'm super happy to see you here.";

console.log(welcomeMessage);

// LET declaration
let myVariable = "Now my variable is a string";

// I can change the value of the variable
myVariable = 12321321321;

// CONST declaration
const myConst = "This is a const variable";

// myConst = 3254354643643; // This will give us an error

// console.log(myVariable.toUpperCase()); // We also get an error because myVariable is not a string anymore

// VAR declaration

var myVar = "Sonora"; // This way of declaring variables is not used anymore.

// I can declare a variable with let without a value, i'ts undefined
let campus;

// until we assign a new value
campus = "Barcelona";
console.log(campus);

// const city; // This is not possible since const variables must be initialized in the declaration

// CREATING MULTIPLE VARIABLES

let user, age, email;
user = "Clara";
age = 26;
email = "clara@ironhack.com";

console.log(user, age, email);

console.log(typeof age); // number
console.log(typeof user);


// DON't NAME VARIABLES RANDOMLY like this:
const x = "Hello world";

const y = 32452642;


const isAdmin = true; 

const role = "Admin";

