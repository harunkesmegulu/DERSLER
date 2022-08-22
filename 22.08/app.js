// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

console.log("**** ARROW ******");

//* ORNEK:
//************************************************/
const r = Number(prompt("yaricap giriniz:"));
const h = Number(prompt("yukseklik giriniz:"));

const hacimHesapla = (r, h) => Math.PI * r * r * h;
console.log(`${r},${h} => Hacmi:{hacimHesapla(r,h) }`);
console.log(`${r},${h} => Hacmi:${hacimHesapla(r, h).toFixed(2)}`);

//* ORNEK:Yaş hesaplama
//************************************************/

const tarih = Number(prompt("Doğum tarihini giriniz."));

const yasHesapla = (tarih) => {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};
console.log("Yasıiz:" + yasHesapla(tarih));
///***alternatif */
//! Arrow Func yontemi ile tanimlama
const yasHesapla = (tarih) => {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};

//* alternatif
const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

// console.log("YASINIZ:" + yasHesapla(tarih));
console.log("YASINIZ:" + yasHesaplaKisa(tarih));

//! Func Expression yontemi ile tanimlama
const yasHesapla2 = function (tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};
//?-----------------------------------------

console.log("YASINIZ:" + yasHesapla3(tarih));

//! Func Declaration yontemi ile tanimlama
function yasHesapla3(tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
}
//?-----------------------------------------
