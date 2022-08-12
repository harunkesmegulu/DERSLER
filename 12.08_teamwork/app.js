// let x = +prompt("1.sayıyı giriniz")
// let y = +prompt("2.sayıyı giriniz")
// console.log("x*y=" , x*y)
// ------------1-----------

// let x = 5
// let y = 8
// console.log("x/y=" ,  x/y)

// let x = +prompt("1.sayıyı giriniz")%2
// let y = +prompt("2.sayıyı giriniz")%2
// console.log(x==1 && x==0 )
// if (x=0 ){
//     console.log("çift sayı girdinz")
// } else{
//     console.log("girdiğiniz sayı tek")
// }


// ---------------------

// let x = +prompt("1.sayıyı giriniz")
// if(x>0) {
//     console.log("girdiğiniz sayı pozitif")
// } else if (x<0){
//     console.log("girdiğiniz sayı negatif")
// } else{
//     console.log("girdiğiniz sayı 0 dır")
// }


// --------------------
// let height = +prompt("uzun kenar giriniz")
// let yarıçap = +prompt("kısa kenar giriniz")
// pi = Math.PI
// console.log("dikdörtgenin çevresi=" , 2*height+2*yarıçap)


// -----------------------

// let x = +prompt("1.sayıyı giriniz")
// let y = +prompt("2.sayıyı giriniz")
// if(x<y){
//     console.log(` ${y} büyük sayıdır`)
// } else if(x>y){
//     console.log(` ${x} büyük sayıdır`)
// } else{
//     console.log("sayılar eşittir")
// }

// ------------------------
// let y = +prompt("celcius değerini giriniz")
// let x = +prompt(" fahrenayt değerini giriniz")

//  C = ( 5*(x-32))/9 ;
//  F = (9*y + (32*5))/5 ;

// console.log(`girdiğiniz celcius değerinin fahreayt değeri ${F}`)
// console.log(`girdiğiniz  fahreayt  değerinin celcius değeri ${C}`)


// ------------------------------


// let y = +prompt("metre değerini giriniz")

// CM = y*100


// console.log(`girdiğiniz metre değerinin cm değeri ${CM}`)

// ------------------------

// let x = +prompt("bedeninizi giriniz")

// if(x<35){
//     console.log("xsmall")
// } else if(x<37){
//     console.log("smalll")
// } else if (x<39){
//     console.log("mid")
// } else if(x<41){
//     console.log("large")
// } else if(x>40){
//     console.log("xlarge")
// } else{
//     console.log("yanliş değer girdiniz terar deneyin")
// }
// -----------------------------

// const today = new Date()
// console.log(today.getFullYear())
// console.log(today.getMonth()+1)
// console.log(today.getDay())
// console.log(today.getDate())
// console.log(today.getMinutes())
// console.log( typeof today.getDay )
// console.log(Date.now())

// const tarih = new Date();
// tarih.setFullYear(2022,6,4)

// console.log((today.getDate() - tarih.getDate()))
// console.log((today.getMonth() - tarih.getMonth()))


// --------------------------

// let x = +prompt("1. sayıyı giriniz")%2
// let y = +prompt("2. sayıyı giriniz")%2
// let z = +prompt("3. sayıyı giriniz")%2

// console.log((x==y)||(x==z)||(z==y))

function greet() {
    console.log('hello');
}
greet();

function greet(name,surname) {
    console.log("Hello," + 'name' + 'surname')
}
greet (name) = 'Jhon'
greet (surname) = 'Carter'
