// const tarih = Number(prompt("Doğum tarihini giriniz."));

// const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;
// console.log("YASINIZ:" + yasHesaplaKisa(tarih));

// 3

/*f(6) = f(5) + f(4)
f(1) = 1
f(2) = 1  **/
/***************************************************** */
// const fibo = (n) => {
//   let fib1 = 1;
//   let fib2 = 1;
//   let toplam = 0;
//   for (let i = 2; i < n; i++) {
//     toplam = fib1 + fib2;
//     fib1 = fib2;
//     fib2 = toplam;
//     stringResult;
//     console.log(toplam);
//   }
//   return fib2;
// };
// const n = +prompt("n terimini giriniz:");
// if (n <= 0) {
//   console.log("Lütfen 0 dan büyük bir sayı giriniz.");
// }
// console.log(`FOBO(${n}) = ${fibo(n)}`);
// console.log(strinResult);

/***************************************************recurisive */
// toplama = function (n) {
//   let fibonacci = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//   }
//   return fibonacci[n];
// };

// const fibo = (n) => {
//   if (n <= 0) {
//     return onabort;
//   } else if (n === 1 || n === 2) {
//     return 1;
//   } else {
//     return fibo(n - 1) + fibo(n - 2);
//   }
// };

// const n = +prompt("n terimini giriniz:");
// console.log(`FIBO(${n})= ${fibo(n)}`);

/***************************************************scope */

//

/***************************************************scope */

// let sayi12 = 5;
// console.log(sayi12);

// const fonks12 = function () {
//   let sayi = 22,
//   console.log(sayi12);
// };
// fonks12();
// console.log(sayi12++);
// console.log(++sayi12);
// console.log(sayi12);

// ? ===================================================
// ?                FONKSİYONLAR-SCOPE
// ? ====================================================
// console.log("******* 3 - SCOPE ********");

// let sayi1 = 5; //! Global Scope
// console.log(sayi1); //! 5

// const fonks1 = function () {
//   sayi1 = 22;
//   console.log(sayi1); //! 22
// };
// fonks1();

// console.log(++sayi1); //! 23
// console.log(sayi1); //!23

// //? --------------------------------------
// const sayi2 = 7; //! Global scope
// console.log(sayi2); //! 7

// const fonks2 = () => {
//   const sayi2 = 11; //! Function-scope
//   console.log(sayi2); //! 11
// };

// fonks2();
// console.log(sayi2); //!7

// if (sayi2 === 8) {
//   let sonuc = "Merhaba";
// } else {
//   sonuc = "Nasilsin"; //! Hoisting oluyor, yani degisken global hale geliyor.
//   // console.log(sonuc);
// }

// console.log(sonuc);

// /****************************************WORK 2 ARRAYS****/

// const cars = ["saab", "volvo", "bmw"];
// console.log(cars);
// console.log(cars[1]); /*volvo*/

// console.log(cars.length);
// console.log(cars[cars.length - 1]);
// cars[3] = "wv";
// console.log(cars);

// // console.log(x);
// let x = 8;
// console.log(x);
// x = 9;
// console.log(x);

// const person = { firstName: "John", lastName: "Doe", age: 46 };
// console.log(person.age);
// person[3] = "3";
// console.log(person[3]);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.forEach(myFunction);

function myFunction(value) {
  console.log(value);
}
