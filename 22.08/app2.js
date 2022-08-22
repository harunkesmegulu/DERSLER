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

const fibo = (n) => {
  if (n <= 0) {
    return onabort;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

const n = +prompt("n terimini giriniz:");
console.log(`FIBO(${n})= ${fibo(n)}`);

/***************************************************scope */

let sayi = 5;
console.log(sayi1);

const fonks1 = function () {
  (sayi = 22), console.log(sayi1);
};
fonks1();
console.log(sayi1++);
console.log(++sayi1);
console.log(sayi1);



/***************************************************scope */


let sayi2 = 5;
console.log(sayi1);

const fonks2 = function () {
  let sayi = 22, 
  console.log(sayi2);
};
fonks2();
console.log(sayi1++);
console.log(++sayi1);
console.log(sayi1);