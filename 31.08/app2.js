const rakamlar = [-5, 15, 22, -4, 45, 78, -25];
let toplam = 0;
for (let i = 0 ; i <rakamlar.length ; i++) {
toplam += rakamlar[i];
}
console.log(toplam);


//////////////////////////////////////***** */
const dizi = [-5, 15, 22, -4, 45, 78];
const topla = (dizi) => {
let negatifler = 0;
let pozitifler = 0;
for (let i = 0; i < dizi.length; i++) {
if (dizi[i] < 0) {
negatifler += dizi[i];
} else {
pozitifler += dizi[i];
}
}
console.log(`Dizideki Pozitif Sayıların Toplamı: ${pozitifler}`);
console.log(`Dizideki Negatif Sayıların Toplamı: ${negatifler}`);
};
topla(dizi);

/************************************** */


const dizi1 = [-5, 15, 22, -4, 45, 78];

const negatifler = [];
  const pozitifler = [];

const dizelereAyir = (n) => {
  
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);
    } else {
      pozitifler.push(n[i]);
    }
  }
  console.log(negatifler);
  console.log(pozitifler);
};
topla(dizi);

/*********************************** */

// //? Dizideki notlarin ortalamasini hesaplayiniz.
// const notlar = [55, 77, 23, 89, 100];

// let toplam2 = 0;
// for (let i = 0; i<)





const sayılar = [-5, 15, 22, -4, 45, 78, -25];
let sonuç = 0;
for (let i in sayılar) {
sonuç += sayılar[i];
}
console.log(sonuç);

////////////?*********************************

const adlar = ["Ahmet", "Can","Mustafa","Ayşe","Elif"];
const soyAdlar= ["Öztürk", "Yılmaz", "Arı", "Çalı", "Yazı"];

const birleştir = (x,y) => {
    let adVeSoyadlar = [];
    for (let i in x) {
    adVeSoyadlar[i] = `${x[i]} ${y[i]}`;
    }
    return adVeSoyadlar;
    };
    console.log(birleştir(adlar, soyAdlar));

    //*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = [
    "ahmet",
    "mehmet",
    "ismet",
    "ahmet",
    "can",
    "mehmet",
    "cem",
  ];
 const findStudents = (arr, search) => {
    let counter = 0;
    for(let i in arr){
        if(search === arr[i]){
            counter++;
        }
    }
    if( counter === 0){
        return `${search} can not be found`;
    }else {
        return `${search} found ${counter} times`;
    }

 };

//   const name = prompt("Please enter aname").toLowerCase();
  console.log(findStudents(students,name));

//////////////////////////////*Dizideki elemanların toplamını bulan programı FOR OF ile yazınız.**********///**** */


  const sayılar3 = [-5, 15, 22, -4, 45, 78, -25];
let sonuç1 = 0;
for (let item of sayılar) {
sonuç += item;
}
console.log(sonuç1);

  //****************Dizideki elemanları birleştirerek tek bir String haline getiren  uygulamayı FOR OF ile yazınız./

  let arabalar = ["BMW", "Volvo", "Mini"];
  let yazı = "";
for (let arac of arabalar) {
yazı += arac + " ";
}
console.log(yazı);
/*********************************************************** */

 const findStudentsOf = (arr, search) => {
    let counter = 0;
    for(let item of arr){
        if(search === item){
            counter++;
        }
    }
    // if( !counter){
    //     return `${search} can not be found`;
    // }else {
    //     return `${search} found ${counter} times`;
    // }
    return !counter
    ? `${search} can not be found`
    : `${search} found ${counter} times`;

 };

//   const studentName = prompt("Please enter aname").toLowerCase();
//   console.log(findStudents(students,studentNameme));

 //* ======================================================*//
//*                   FOREACH METHOD
//* ======================================================

console.log("****** ITERATION **********");

//
//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 250, 50, 89];
fiyatlar.forEach((p)=> console.log(p));

//**********************toplamı bulunuz */

let sum = 0;
prices.forEach((price, index) => {
    sum += price;
console.log(`${index + 1}.iteration: ${sum}`);
