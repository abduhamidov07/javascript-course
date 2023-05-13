"use-strict";
/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Sardor");

let lastName = 'Sardor';
console.log(lastName);

// Variable name conventions
let $function = 25;

let person = "sardor";
let PI = 3.1415;

let myCurrentJob = "coder";

let job1 = "programmer";
let job2 = "businessman";

console.log(myCurrentJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);   // boolean
// console.log(typeof 23);
// console.log(typeof 'sardor');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);   // string

let year;
console.log(year);
console.log(typeof year);              // undefined

year = 2007;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 15;
age = 16;

const birthYear = 2007;
// birthYear = 2000;  
// const job;

var job = 'programmer';
job = 'businessman'

lastName = 'Abduhamidov';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2023;
const ageSardor = now - 2007;
const ageIslom = now - 2008;
console.log(ageSardor, ageIslom);

console.log(ageSardor * 2, ageSardor / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Sardor';
const lastName = 'Abduhamidov';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageSardor > ageIslom); // >, <, >=, <=
console.log(ageIslom >= 18);

const isFullAge = ageIslom >= 18;

console.log(now - 2007 > now - 2008);

////////////////////////////////////
// Operator Precedence
const now = 2023;
const ageSardor = now - 2007;
const ageIslom = now - 2008;

console.log(now - 2007 > now - 2008);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageSardor + ageIslom) / 2;
console.log(ageSardor, ageIslom, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI 
(Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


////////////////////////////////////
// Strings and Template Literals
const firstName = 'Sardor';
const job = 'coder';
const birthYear = 2007;
const year = 2023;

const sardor = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(sardor);

const sardorNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(sardorNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log('Sardor can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sardor is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!"
or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 

GOOD LUCK 
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = '2007';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('sardor'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);


////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('sardor'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


////////////////////////////////////
// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');


////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//   console.log('Islombek is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }


const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Islombek is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the 
highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget 
that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than 
the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as 
well as multiple else-if blocks 
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have 
a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 
*/

/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy');
}



////////////////////////////////////
// The switch Statement
const day = 4;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 1) {
  console.log('Monday');
} else if (day === 2) {
  console.log('Tuesday');
} else if (day === 3) {
  console.log('wednesday');
} else if (day === 4) {
  console.log('Thursday');
} else if (day === 5) {
  console.log('Friday');
} else if (day === 6) {
  console.log('Saturday');
} else if (day === 7) {
  console.log('Sunday');
} else {
  console.log('Not a valid day!');
}


////////////////////////////////////
// Statements and Expressions
3 + 4
2007
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'sardor';
console.log(`I'm ${2037 - 2007} years old ${me}`);


////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's
usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not 
allowed to use an if/else statement  (If it's easier for you, you can start with an if/else statement, and then try 
to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The 
bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 

GOOD LUCK 
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/
