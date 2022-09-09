const myCar = {
    make : 'ford',
    model : 'Mustang',
    year : 1965,
    color : 'Black'
}
myCar.age= function(year) {
    console.log(year-myCar.year)
}
myCar.age(2030)
for(let key in myCar){
    console.log(key)
}
//todo //BİLİNMESİ GEREKEN 15 JS ARRAY METODU//
​
01; find();
02; includes();
03; filter();
04; concat();
05; push();
06; join();
07; sort();
08; slice();
09; splice();
10; every();
11; some();
12; reduce();
13; findIndex();
14; entries();
15; map();
//*** 1. find()
//! find() metodu, dizide bir elemanı bulmayı sağlar ve bu elemanı bulduğu anda arama işlemi durdurarak bulunan elemanı döndürür.
​
//? ÖRNEK
const ogrenciler = [
    { id: 1, name: "Murat", num: 22 },
    { id: 2, name: "Captain", num: 33 },
    { id: 3, name: "Price", num: 44 }
];
​
; console.log(ogrenciler.find((numarası) => numarası.num > 3));
//* Çıktı ==> {id: 1, name: 'Murat', num: 22}. İlk bulduğu anda işlem durdu ve sonucu yazdırdı

//*** 2. includes()
//! includes() metodu ile dizinin belirli bir elemanı içerip içermediğini belirleyebiliriz. Eğer dizi bu değeri içeriyorsa TRUE, içermiyorsa FALSE değeri döndürür.
​
//? ÖRNEK
let arabalar = ["Tofaş", "Anadol", "Bugatti"];
​
console.log(arabalar.includes("Tofaş")); //* Çıktı ==> true
​
console.log(arabalar.includes("Ferrari")); //* Çıktı ==> false
