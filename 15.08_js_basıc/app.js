?condition

* ===============================================
*                  KARAR YAPILARI
* ===============================================

**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

const number = prompt("Enter Number3")
if(number>0){
    console.log(`${number} positif`);

}else if(number == 0){
    console.log(`${number} zero`);
}else{
    console.log(`${number} negativ`);
}
console.log(number, typeof number);


//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.

const number1 = +prompt ("Enter Number one");
const number2 = +prompt ("Enter Number one");
const number3 = +prompt ("Enter Number one");
if(number1>=number2 && number1>= number3){
    console.log(`${number1} biggest one`);
}else if (number2>=number1 &&  number2>=number3){
    console.log(`${number2} biggest one`);
}else{
    console.log(`${number3}biggest one3`);
}

//* second way
const n1 = +prompt ("Enter Number one");
const n2 = +prompt ("Enter Number two");
const n3 = +prompt ("Enter Number three");
let biggest = n1
if(n2 >= biggest ){
    biggest =n2;
}
if (n3>= biggest){
    biggest = n3
}4
    console.log(`${biggest} biggest one`);

    //////////////////////////////////////////////?

const age = +prompt ("Enter your age");
const  sex = prompt ("Are you male or female ");
const healty = prompt ("Are you healty true/false");

 const true = age>= x && sex == `male` &&   healty == true ;
 if(true){
    console.log(`You are chosen one`);

 }

 const not = +prompt(`Enter your grade`);
 let sonuc = not >= 50 ? `Pass` : `Loose;
 console.log(sonuc);

 console.log(not2>= 50 ? "pass" : "loose");

 const mesaj = hız >= 120 ? "hızlı" : (hız >= 90 ? "Normal" : "yavas");


 //////////////////////////////////////////////?
 //**************** TERNARY *******************

//? ORNEK5: Kaldi-Gecti
const not = +prompt("Notunuzu giriniz:");
// let sonuc = not >= 50 ? "Gecti" : "Kaldi";
// console.log(sonuc);
console.log(not >= 50 ? "Gecti" : "Kaldi");

//? ORNEK6:
const yas = 17;
const cinsiyet = "erkek";
const saglikli = false;

yas >= 18 && cinsiyet === "erkek" && saglikli
  ? console.log("askerlik yapmali")
  : console.log("Askerlik yapmasina gerek yok");

  
  //////////////////////////////////////////////////!

 //! ODEV1: Dort Islem Hesap Makinasi

//**************** SWITCH-CASE *******************

//! ODEV2
//! Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

//! Program
//! Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//! Cuma -> Teamwork
//! Cumartesi ->  InClass + Workshop
//! Pazar -> Self-Study
//! Aksi takdirde -> Yanlis gun girildi.

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.

//* let maas = 5000;
//* maas = maas * 1.5

//! ODEV4: Console’dan kişinin gelir ve gider miktarını alan
//! eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//! değilse  Kredi Verilemez 🥺
//! şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.