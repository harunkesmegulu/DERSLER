//! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.

// const validNumber = () => {
//     let num = prompt("Enter a valid number")

//     if (Number(num)){
//         console.log("It is a valid number") 
//     } else {
//         return validNumber()              // recursion
//     }
// }

// console.log(validNumber());


//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.

// const findGcd = (num1, num2) => {
//     let gcd;

//     if (num1 === 0 || num2 === 0){
//         return 'Please enter a valid number'
//     }

//     for (let i = 1; i <= num1 && i <= num2; i++){
//         if (num1 % i === 0 && num2 % i === 0){
//             gcd = i;
//         }
//     }

//     return gcd
// }

// console.log(findGcd(3,6));

//! Q-3
//? Write a code that displays the factors (tam bolen) of a number entered by the user.

// const factor = (num) => {
//     let arr = []

//     for (let i = 1; i <= num; i++){
//         if (num % i === 0){
//             arr.push(i, -i)
//         }
//     }

//     return arr;
// }

// console.log(factor(12));
// console.log(factor(13));

//! Q-4
//? Write a code to calculate the factorial of a number entered by the user.

// const factorial = (num) => {
//     if (num < 0) return -1;

//     if (num === 0){
//         return 1
//     } else {
//         return num * factorial(num - 1)
//     }
// }

// console.log(factorial(3));

//! Q-5
//? Write a code to find numbers that are divisible by 3 and 5, between 100 and 1000.

//! Q-1
//? Write a Function that takes 2 parameters (amount and rate) to convert currency.
//? Example:
//? Amount = 1000    rate = 1.5     should return 1500 as amount * rate is equal to 1500

// const currency = (amount, rate=1.5) => amount * rate


// console.log(currency(1000));

//! Q-2
//? Write a JavaScript function that accepts an argument and returns the type.

// const type = (x) => {
//     return typeof x
// }

// console.log(type(true))

//! Q-3
//? You are given a string and character. Write a function to check the string and find how many
//? times this character occurs in this string.
//? Example:
//? str = "Clarusway"         char = "a"       ===> result = 2 as "a" occurs 2 times in Clarusway

// const times = (str, char) => {
//     let count = 0

//     for (let i =0; i < str.length; i++){
//         // str[i] === char && count++
//         if (str[i] === char){
//             count++
//         }
//     }
//     return `${char} occurs ${count} times in ${str}`
// }

// const times = (str, char) => {
//     return str.split(char).length - 1
// }

// console.log(times('Clarusway', 'a'));

//! Q-4
//? Write a JS code to display Perfect Numbers from 1 to 1000.
//? A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
//? For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.

// const perfectNums = () => {
//     let arr = []

//     for (let i = 1; i <= 1000; i++){
//         sum = 0;

//         for (let k = 1; k < i; k++){
//             if (!(i % k)) {
//                 sum += k;
//             }
//         }

//         if (sum === i){
//             arr.push(i)
//         }

//     }

//     return arr
// }


// console.log(perfectNums());