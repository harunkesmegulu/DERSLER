//lops
console.log("DATA_TYPES");

var a =5;
console.log(a);

{
    console.log(a); 
    
}
console.log(a);

let b = 6;
console.log(b);
{
   
    console.log(b)
}

console.log(b)
////////////////////////////////
var c = 5;
console.log(c);

{
    console.log(c); 
    var c = 2;
}
console.log(c);


let d = 6;
console.log(d);
{
   let d = 3;
    console.log(d);
}

console.log(d);

/////////////////////////under this line is important

let e = 6;
console.log(e);
{
   e = 3;
    console.log(e);
}

console.log(e);
//////////////////

console.log(typeof 0);
console.log(typeof 3.14);
console.log(typeof 'hello');
console.log(typeof (8 < 10));
console.log( 8 > 10);
console.log(typeof '');

// let f = prompt("bir değer giriniz");
// console.log(f, typeof f)
// let g = +prompt("bir değer giriniz");
// console.log( typeof g)
// console.log( typeof typeof g)
////////////////////////////
// string olan sayı ifadesini
// başına + ekleyip number tipine
// parseInt(stringVar) ile integer number a
// parseFloat(stringVar) ile kesirli sayı
// elde ederiz
/////////////////////////////////////////////

// console.log(myAge);
// // var myAge = 40;   /////////undefined 
// // let myAge = 40;  ///// cannot access before initialization
// console.log(myAge)

// let r;
// do {
//     r =prompt("enter a number:");

// } while (isNaN(r));
// console.log(r, r*r);
///////////////////////////////
// console.log("12" == 12);
// console.log("12" === 12);

/////////////////////////////////

let g = 12345678912345
let h = 123456789123456789  //out of integer limit
let j = 0.1234567891234567
let k = 0.12345678912345678

console.log(g);
console.log(h);
console.log(j);
console.log(k);

console.log(0.1+0.2) ////// 0.30000000000000004
let l = 0.1 + 0.2
console.log(+l.toFixed(2))

///////////////////////////

let z = 1_000_000_000
console.log(z)
////////////////////////
////////////////////////strıngs////////////////

let text2 = "He said, \" ı am \"";
console.log(text2);

let v = 'This """i""s"" st""ri\"ng'
console.log(typeof v)
let n = "Thi\"s'''' is '''''string"
console.log(typeof n)
let m = `This is string`
console.log(typeof m)

let userName = 'mm';
console.log('Merhaba', userName);
console.log(`Merhaba ${userName}`);
console.log(`2 + 3 = ${2 + 3}`);
console.log(`2+3 = ${2+'3'}`);
console.log(userName.length);
console.log(`3`-2);
///////////////////////////////booleans
let w = 2 ==2;
let q = 42 == 35;
console.log(`q =${q}`);
console.log(`w =${w}`);
///////////////////////////////
let aa =``;
let bb = ' '; ////space make it true
let cc = 0;

console.log(Boolean(aa));
console.log(Boolean(bb));
console.log(Boolean(cc));

const myCar = {
    make : 'ford',
    model : 'Mustang',
    year : 1965,
    color : 'Black'
  }
  console.log(myCar);
  myCar.color = `green` //change the inside box.
  console.log(myCar);

//   myCar = `wv`; can't be change the box
myCar.sunRoof = false;
myCar.age = function(current){
    console.log(current - this.year)
  }
  
myCar.age(2010)

`console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())`

let car = "Fiat";
// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName : function() {
        return this.firstName + " " + this.lastName;
}
};
  //objectName.propertyName
  //objectName["propertyName"]
  console.log(person.age); 
  console.log(person.fullName()); 
  console.log(person["age"]); 