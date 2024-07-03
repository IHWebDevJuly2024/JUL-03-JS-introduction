const introduction = "Hello, I'm Marcel";

const newString = 'Me is not "developer"';

const newString2 = `He said that I'm not a "developer"`;

//( with backticks we can have multiple lines in the code and they are going to be also displayed like that in the console)

const backtickString = `Hello
this
is
a 
string
in 
multiple 
lines
`;

console.log(backtickString);

// AWESOME THING ABOUT BACKTICKS

// TEMPLATE LITERAL

const manager = "Marina";

const campus = "Barcelona";

const output = `The manager of the ${campus} campus is ${manager}`;

console.log(output);

// old school way:
console.log("The manager of " + campus + " campus is " + manager);

// Multiple lines with double quotemarks
console.log("One line \nAnother line");

// Length of the string
const myCity = "Paris";

console.log(myCity.length); // this should be 2

// A few methods (functions used for objects)

console.log(myCity.charAt(0));

console.log(myCity.repeat(10));