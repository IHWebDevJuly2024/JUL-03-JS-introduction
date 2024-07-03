const bigNumber = 1000000;

console.log(bigNumber);

const antherBigNumber = 1e100;

console.log(antherBigNumber);

// JS is going to convert the number into a string
console.log("Hello world " + 20);

// Other operations will give us NaN
console.log("Hello world " - 20);

// MATH

// rounds down
console.log(Math.floor(20.8)); // 20

// round up
console.log(Math.ceil(20.1)); // 21

// round
console.log(Math.round(20.6)); // 21
console.log(Math.round(20.4)); // 20

const decimals = 5.34324325325;
// round decimals
console.log(decimals.toFixed(2));
// CAREFULL because this method is going to return a string
console.log(typeof decimals.toFixed(2));

const newNumber = "123";

console.log(typeof newNumber);

const convertedToNumber = Number(newNumber);

console.log(convertedToNumber);
console.log(typeof convertedToNumber);

console.log(Math.random());

console.log(Math.floor(Math.random() * 6 + 1));

console.log(Math.ceil(Math.random()*6));
