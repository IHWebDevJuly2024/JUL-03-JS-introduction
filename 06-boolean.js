const isAdmin = true;

console.log(1 === 1);

const firstNumber = 10000000;
const secondNumber = 10000;

console.log(firstNumber >= secondNumber);

console.log(firstNumber > secondNumber || firstNumber === secondNumber);

console.log(true && true);

console.log(true || false);

console.log(true && false);

// NOT OPERATOR
console.log(!false);

const isSuperHero = true;

if (!isSuperHero) {
  console.log("Sorry you cannot teleport");
}

if (isSuperHero) {
  console.log("Congrats, you can teleport an fly");
}

const superHeroName = ""; // this is falsy

if (superHeroName) {
  console.log("There is a superHero name");
}

if (!superHeroName) {
  console.log("We don't have a superhero name or the name is empty");
}


const myNumber = 0  // falsy

if(myNumber){
    console.log("This means the number is not 0");
}

if(!myNumber){
    console.log("This means the number is 0, so it's falsy");
}


console.log(new Date()); // SPOILER