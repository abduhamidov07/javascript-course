/*
// SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);
console.log(arr.slice(1));
console.log(arr.slice(1, 3));
console.log(arr.slice(-3));
console.log(arr);

// SPLICE
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
console.log(arr.concat(arr2));
console.log([...arr, ...arr2]);

// JOIN
console.log(arr.join(' -- '));
console.log(arr2.join(' __ '));


// AT
let arr = [23, 45, 67];
console.log(arr[0]);
console.log(arr.at(0));

// Getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));
console.log(arr.slice(-1)[0]);

console.log('sardor'.at(0));
console.log('sardor'.at(-1));
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// forEach vs for of

// let movements = [200, -428, 89, 340, -600, 400, -100];

// for (let [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
//     }
// }

// console.log('---FOREACH---');

// movements.forEach(function(mov, i, arr){
//     if (mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
//     }
// })

// forEach with Maps and Sets

// let map = new Map(
//   [
//     ['uzb', 'salom'],
//     ['eng', 'hello'],
//   ]
// )

// map.forEach(function(value, key, map) {
//     console.log(`${key}: ${value}`);
// })

// let set = new Set(['USD', 'EUR', 'GBP', 'EUR', 'USD']);
// console.log(set);

// set.forEach(function(value, key, set) {
//     console.log(`${key}: ${value}`);
// })
// console.log('');

// set.forEach(function(value, _, set) {
//     console.log(`${value}: ${value}`)
// })

// let checkDogs = function(dogsJulia, dogsKate) {
//   let dogsJuliaCorrect = dogsJulia.slice();
//   dogsJuliaCorrect.splice(0, 1);
//   dogsJuliaCorrect.splice(-1);
//   let dogs = dogsJuliaCorrect.concat(dogsKate);

//   dogs.forEach(function(dog, i) {
//     if (dog > 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   })
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// let funcMap = movements.map(function (mov) {
//   return mov * 2;
// });

// console.log(movements);
// console.log(funcMap);

// let movementsUSDfor = [];
// for (mov of movements) {
//   movementsUSDfor.push(mov * 2);
// }
// console.log(movementsUSDfor);

// let mapFunc = movements.map((mov) => mov * 3);
// console.log(mapFunc);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

// console.log(movements);

// movements.filter(function (mov, i) {
//   console.log(i, mov);
// });

// console.log(movements);

////////////////////////////////////////////////////////////////
// Reduce

// let balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// let balance = movements.reduce((acc, cur) => acc + cur);

// console.log(balance);

// let balance2 = 0;
// for (let mov of movements) balance2 += mov;
// console.log(balance2);

// // max value

// let max = movements.reduce(function (acc, cur) {
//   if (acc > cur) return acc;
//   else return cur;
// });
// console.log(max);

////////////////////////////////////////////////////////////////
///// Coding challange 2
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// let calcAverageHumanAge = function (dogAge) {
//   let humanAge = dogAge.map((dog) => (dog <= 2 ? dog * 2 : dog * 4 + 16));
//   let adult = humanAge.filter((age) => age >= 18);
//   console.log(humanAge);
//   console.log(adult);
//   // let result = adult.reduce((acc, dog) => acc + dog, 0) / adult.length;
//   let result = adult.reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
//   return result;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// The Magic of Chaining Methods
// const eurToUsd = 1.1;
// console.log(movements);

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);
//

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1:
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = (dogAge) => {
//   let result = dogAge
//     .map((dog) => (dog <= 2 ? dog * 2 : dog * 4 + 16))
//     .filter((dog) => dog >= 18)
//     .reduce((acc, dog, i, arr) => acc + dog / arr.length, 0);
//   return result;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

///////////////////////////////////////
// The find method

// let result = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(result);

const account1 = {
  owner: "Sardor Abduhamidov",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// console.log(accounts);

// let account = accounts.find((acc) => acc.owner === "Sarah Smith");
// console.log(account);

// Some and Every
// let inc = movements.includes(-130);
// console.log(inc);

// let some = movements.some((mov) => mov < 0);
// console.log(some);

// let every = movements.every((mov) => mov == 0);
// console.log(every);

// let acc = accounts.pop().movements.every((mov) => mov > 0);
// console.log(acc);
// console.log(" ");

// let deposit = (mov) => mov < 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// Flat and flatMap

// let arr = [1, 2, [3, 4, [5, 6], 7], 8];
// console.log(arr.flat(3));

// let result = accounts
//   .map((accounts) => accounts.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(result);

// let result2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(result2);

///////////////////////////////////////

let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = new Array(1, 2, 3, 4, 5, 6, 7);

console.log(arr);
console.log(arr2);

let x = new Array(7);

x.fill(1, 3, 5);
x.fill(0);
console.log(x);
