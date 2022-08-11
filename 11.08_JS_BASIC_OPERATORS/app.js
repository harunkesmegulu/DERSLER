// let x= 1;
// let y=1;
// console.log(x==y);
// console.log(x!=y);


// const a = 10;
// const b = 5;
// const c = 5;
// let d = 3;
// a == b; // a b'ye eşit mi ---> false
// b == c; // b c'ye eşit olduğundan ---> true
// b === c; // true, hem değeri hem tipi eşit
// b ==='5'; // değer eşit fakat tip eşit değil ---> false
// b == '5'; // değer eşit, tipine bakmadı --> true
// c  !=  b; // eşit değil mi? false çünkü eşit

// //////! MANTIKSAL OPERATORLERİ/////
// //1. Not operatoru ---> ! ısaretıyle ıfade edılır. onune geldıgı trueyu false;falseu true ya cevırıyor
// console.log(!(2 != 2)); //ıctekı false olmasına ragmen ! (not operatoru) onu true cevırdı
// console.log(!(2 == 2)); // ıctekı true olmasına ragmen ! onu false cevırdı
// //2. and ---> &&(shift+6) isaretıyle ıfade edılır.(true, true = true //!true, false = false)
// console.log(4 == 2 && "Ali" == "Ali"); //tum kosulların true olması grekır kı sonuc true olsun
// //3. or ---> || (Alt Gr+Ctrl+<|> tusu)isaretıyle ıfade edılır.(true, true = true //! true, false = false
// console.log(4 == 2 || "Ali" == "Ali"); // tum kosullarda false cıkmalı kı sonuc false olsun yoksa bır tane bıle true gorurse sonuc true olacaktır.

// MANTIKSAL OPERATÖRLER   
// AND      &&      ve          (ampersan)
//  OR      ||      veya        (pipe)
// NOT      !       değildir    (negation)
// and false hassastır. 
// true1   &&  true2       --> true2  false bulamadı en son true'yu return etti
// true    &&  false       --> false  ilk false aldı
// false1  &&  false2     --> false1  ilk false aldı
// false   &&  true       --> false   ilk false aldı.
// or true hassastır. 
// true1   ||  true2       --> true1  ilk true'yu alır
// true    ||  false       --> true  ilk false aldı
// false1  ||  false2     --> false2 true bulamadı en son false aldı 
// false   ||  true       --> true   ilk true aldı.
// not terse çevirir.
// !false                  --> true
// !true                   --> false



// let num1 = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');
// console.log(`${num1} x ${num2} is ${num1 * num2}, \n${num1} / ${num2} is ${num1 / num2}`);

// 3

// There are at least 2 numbers having same first digit: true/false

// let q = +prompt('Enter first number');
// let a = +prompt('Enter second number');
// let z = +prompt('Enter third number');
// const result = q % 10 == a % 10 || q % 10 == z % 10 || a % 10 == z % 10 ;
// console.log(`There are at least 2 number having same first digit: ${result}`)

// * 4. print today's date separately :8min
// * day of month is 11
// * month of year is 8
// * year is 2022

// const today = new Date();
// console.log(today);
// 1
// console.log(today.getFullYear());
// // * use today (.) for needed functions

// console.log(`day of month is ${today.getDate()}`);
// console.log(`month of year is ${today.getMonth() + 1}`);
// console.log(`year is ${today.getFullYear()}`);

let text = "aşjfqpwknvq"

for(let i = 0 ; i<text.length; i++){
    console.log(text[i] )
}

let text2 = "We are the so-called \\Vikings\\ from the north.";
console.log(text2)
let x = new String("John");
let y = new String("John");

let e = new Object("John");
let f = new Object("John");