// ?condition

// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

// **************** IF-ELSE *******************

// console.log("****** CONDITIONS *******");

// const number = prompt("Enter Number3")
// if(number>0){
//     console.log(`${number} positif`);

// }else if(number == 0){
//     console.log(`${number} zero`);
// }else{
//     console.log(`${number} negativ`);
// }
// console.log(number, typeof number);


// //? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
// //? yazdiriniz.

// const number1 = +prompt ("Enter Number one");
// const number2 = +prompt ("Enter Number one");
// const number3 = +prompt ("Enter Number one");
// if(number1>=number2 && number1>= number3){
//     console.log(`${number1} biggest one`);
// }else if (number2>=number1 &&  number2>=number3){
//     console.log(`${number2} biggest one`);
// }else{
//     console.log(`${number3}biggest one3`);
// }

// //* second way
// const n1 = +prompt ("Enter Number one");
// const n2 = +prompt ("Enter Number two");
// const n3 = +prompt ("Enter Number three");
// let biggest = n1
// if(n2 >= biggest ){
//     biggest =n2;
// }
// if (n3>= biggest){
//     biggest = n3
// }4
//     console.log(`${biggest} biggest one`);

//     //////////////////////////////////////////////?

// const age = +prompt ("Enter your age");
// const  sex = prompt ("Are you male or female ");
// const healty = prompt ("Are you healty true/false");

//  const true = age>= x && sex == `male` &&   healty == true ;
//  if(true){
//     console.log(`You are chosen one`);

//  }

//  const not = +prompt(`Enter your grade`);
//  let sonuc = not >= 50 ? `Pass` : `Loose;
//  console.log(sonuc);

//  console.log(not2>= 50 ? "pass" : "loose");

//  const mesaj = hız >= 120 ? "hızlı" : (hız >= 90 ? "Normal" : "yavas");


//  //////////////////////////////////////////////?
//  //**************** TERNARY *******************

// //? ORNEK5: Kaldi-Gecti
// const not = +prompt("Notunuzu giriniz:");
// // let sonuc = not >= 50 ? "Gecti" : "Kaldi";
// // console.log(sonuc);
// console.log(not >= 50 ? "Gecti" : "Kaldi");

// //? ORNEK6:
// const yas = 17;
// const cinsiyet = "erkek";
// const saglikli = false;

// yas >= 18 && cinsiyet === "erkek" && saglikli
//   ? console.log("askerlik yapmali")
//   : console.log("Askerlik yapmasina gerek yok");


//   //////////////////////////////////////////////////!

//  //! ODEV1: Dort Islem Hesap Makinasi

// //**************** SWITCH-CASE *******************

// //! ODEV2
// //! Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

// //! Program
// //! Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
// //! Cuma -> Teamwork
// //! Cumartesi ->  InClass + Workshop
// //! Pazar -> Self-Study
// //! Aksi takdirde -> Yanlis gun girildi.

// //! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
// //! fazla olanlara ise %10 zam yapmak istiyoruz.

// //* let maas = 5000;
// //* maas = maas * 1.5

// //! ODEV4: Console’dan kişinin gelir ve gider miktarını alan
// //! eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
// //! değilse  Kredi Verilemez 🥺
// //! şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.



// let x = +prompt("bir sayı girinz")
// let y = +prompt("2.bir sayı giriniz")
// let  işlem =  +prompt("bir işlem seçiniz (+ , - ,* , /)")
// if(işlem == "+"){
//     console.log(`½{x} + ½{y}`)
// } 
// else if(işlem == "-"){
//     console.log(`½{x} - ½{y}`)
// } 
// if(işlem == "*"){
//     console.log(`½{x} * ½{y}`)
// } 
// if(işlem == "/"){
//     console.log(`½{x} / ½{y}`)
// } else{
//     console.log("tüh birşeyleri yanliş yaptin")
// }


//! ODEV2
//! Clarusway'deki haftalık ders ve etkinlik programınızı, console'dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

// let day = prompt(`Enter day`).toLowerCase()
// console.log(day)
// switch (day) {
//     case `monday`:
//     case `tuesday`:
//     case `wednesday`:
//     case `thursday`:
//         console.log(`In class `)
//         break;
//     case `friday`:
//         console.log(`Teamwork`)
//         break
//     case `saturday`:
//         console.log(`Inclass ve Teamwork`)
//         break
//     case `sunday`:
//         console.log(`SELF STUDY`)
//         break
//     default:
//         console.log(`hatalı bir gün girdiniz`)
//         break;
// }

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.

// const asgari = 5500
// let maas = +prompt(`lütfen maasınızı girin`)

// let zamlımaas = maas >= asgari ? (maas*1.1) : (maas*1.5)
// console.log(`Yeni maaşınız : ${zamlımaas.toFixed(2)}`)

// second 

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.

// const asgari = 5500
// let maas = +prompt(`lütfen maasınızı girin`)

// let zamlımaas = maas >= asgari ? (maas*1.1) : (maas*1.5)
// console.log(`Yeni maaşınız : ${zamlımaas.toFixed(2)}`)

// const asgari =(`5500`)
// let maas = +prompt(`maası giriniz`)
// if(maas>=asgari){
//     console.log(`zamlı maas ${maas*1.1}`)
// }
// else if(maas <=asgari){
//     console.log(`zamsız maas ${maas*1.5}`)
// }
// else{
//     console.log(`zam yok`)
// }


// console.log((+prompt(`Gelir miktarınızı giriniz`))-(+prompt(`Gider miktarınızı giriniz`)) >= 5500 ? `Kredi Verilebilir 🤑` : `Kredi Verilemez 🥺`)

// let not = +prompt(`not giriniz(0-100)`);
//  if(not > 90 && not <= 100){
//     console.log(`Notunuz : ${not} AA`);
//  }
//  else if(not <= 90 && not > 75){
//     console.log(`Notunuz ${not} BA`);
//  }
//  else if(not >= 66 && not <= 75){
//     console.log(`Notunuz ${not} BB`);
//  }
//  else if(not >= 46 && not <= 65){
//     console.log(`Notunuz ${not} CC`);
//  }
//  else if(not >= 26 && not <= 45){
//     console.log(`Notunuz ${not} DD`);
//  }
//  else if(not >= 0 && not <= 25){
//     console.log(`Notunuz ${not} FF`);
//  }
//  else{
//     console.log(`Notunuzu 0-100 arasında giriniz`)
//  }

// let not = +prompt(`Not Giriniz (0-100)`) ;
// if (not >=91 && not <=100) {
//     console.log( `Notunuz : ${not} AA`);
// } else if (not >= 76) {
//     console.log( `Notunuz : ${not} BA`);
// }
// else if (not >=66){
//     console.log( `Notunuz : ${not} BB`);
// }
// else if (not >=46){
//     console.log( `Notunuz : ${not} CC`);
// }
// else if (not >=25){
//     console.log( `Notunuz : ${not} DD`);
// } else if (not >=0){
//     console.log( `Notunuz : ${not} FF`);
// }
// else {
//     console.log("Notunuzu 0-100 arasında giriniz");
// }