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

//*** 3. filter()
//! filter() metodu sayesinde belirlediğimiz şarta göre tüm dizi elemanlarını kontrol eden ve şartı sağlayan dizi elemanlarıyla yeni bir dizi oluşturmayı sağlayabiliriz.
​
//? ÖRNEK
const sayılar = [1, 2, 3, 4, 5, 6, 7];
​
const filterMetodu = sayılar.filter(sayı => sayı > 4); //* Sayılar dizisindeki 4'ten büyük sayıları filtreledik.
​
console.log(filterMetodu); //* Çıktı ==> [5, 6, 7]
​
console.log(sayılar); //* Çıktı ==> [1,2,3,4,5,6,7]  dizinin orjinali değişmedi!!!

//*** 4. concat()
//! concat() metodu, dizileri birleştirme işlemi yapar ve birleştirilen dizilerden de yeni bir dizi oluşturur.
​
//? ÖRNEK
const dizi1 = ["Murat", "Captain", "Price", true];
​
const dizi2 = [1, 2, "JavaScript", 3];
​
const dizi3 = dizi1.concat(dizi2);
​
console.log(dizi3); //* Çıktı ==> ['Murat', 'Captain', 'Price', true, 1, 2, 'JavaScript', 3]

//*** 5. push()
//! push() metodu, dizinin sonuna bir veya daha fazla öğe(eleman) ekler ve dizinin yeni halini döndürür.
​
//? ÖRNEK
const isimler = ["Murat", "Captain", "Price"];
​
isimler.push(`Messi`);
​
console.log(isimler); //* Çıktı ==> ['Murat', 'Captain', 'Price', 'Messi']
​
isimler.push(`Ronaldo`, `Alex`);
​
console.log(isimler); //* Çıktı ==> ['Murat', 'Captain', 'Price', 'Messi', 'Ronaldo', 'Alex']

//*** 6. join()
//! join() metodu, bir dizinin (veya dizi benzeri bir nesnenin(object)) tüm öğelerini(elemanlarını) belirtilen düzende string olarak birleştirir.
​
//? ÖRNEK
const adlar = ["Murat", "Captain", "Price"];
​
console.log(adlar.join('*')); //* Çıktı ==> Murat*Captain*Price
​
console.log(adlar.join('-')); //* Çıktı ==> Murat-Captain-Price
​
console.log(adlar.join()); //* Çıktı ==> Murat,Captain,Price
​
console.log(adlar.join(" ")); //* Çıktı ==> Murat Captain Price
​
console.log(adlar.join("")); //* Çıktı ==> MuratCaptainPrice

