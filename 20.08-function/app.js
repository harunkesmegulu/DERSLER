// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YONTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("**** FUNCTION DECLARATION ******");

//* ORNEK:
//************************************************/
yazdir();

//! Fonksiyonun tanimlanmasi (declaration)
function yazdir() {
  console.log("merhaba");
}

yazdir(); //! invoke, call, cagirma
yazdir();

//* ORNEK2:
//*************************************************/

function yaşYazdır(ad, doğumTarihi) {
  const yaş = 2021 - doğumTarihi;
  console.log(`Benim adım ${ad} ve Ben ${yaş} yaşındayım`);
  return yaş;
}
const yaşMurat = yaşYazdır("Murat", 1990);
const yaşJohn = yaşYazdır("John", 1980);
const yaşAyşe = yaşYazdır("Ayşe", 1994);
console.log(`Yaşların ortalaması = ${(yaşMurat + yaşJohn + yaşAyşe) / 3}`);
//* ORNEK:
//************************************************/

function selamla(ad = "Enter Name", soyAd = "Enter sorName") {
  console.log(`Merhaba ${ad} ${soyAd}`);
}
selamla("Can", "Yılmaz");

//* ORNEK:
//************************************************/

function yasHesapla(isim, dogumTarihi) {
  const sonuc = `${isim}in yasi ${new Date().getFullYear() - dogumTarihi} dir`;
  return sonuc;
}

const mesaj = yasHesapla("Elif Can", 1990);
console.log(mesaj);

//* ORNEK:
//************************************************/

function yasHesapla(isim, dogumTarihi) {
  return `${isim}in yasi ${new Date().getFullYear() - dogumTarihi} dir`;
}

const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1);
//* ORNEK:
//************************************************/
function yasHesapla(isim, dogumTarihi) {
  return `${isim}in yasi ${new Date().getFullYear() - dogumTarihi} dir`;
}
console.log(yasHesapla("Elif Can", 1990));

//* ORNEK:
//************************************************/

function tekCift(sayi) {
  return sayi % 2 ? "tektir" : "ciftir";
}
console.log(tekCift(5));
console.log(tekCift(2));

tekCift(5);
tekCift(2);

//* ORNEK:
//************************************************/
function tekCift(sayi3) {
  return sayi3 % 2 ? "tektir" : "ciftir";
}
const sayi3 = +prompt("Bir sayı giriniz");
console.log(tekCift(sayi3));

const n = +prompt("Bir sayı giriniz");
console.log(tekCift(n));
