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
//
//* ORNEK:
//************************************************3. function expression/

// // Function expression
// const tekMi = function (x) {
//   return x % 2 ? `${sayi} tektir` : `${sayi} cifttir`;
// };
// // const sayı = Number(prompt("Sayıyı giriniz:"));
// console.log(`tekMi(5)`);

const buyukBul = function (n1, n2, n3 = -Number.MAX_VALUE) {
  let enBuyuk;
  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }
  return enBuyuk;
};
// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// console.log("Girilen sayıların en bğyğğü:", buyukBul(n1, n2, n3));

//* ORNEK:
//************************************************/

const buyukBul2 = function (n1 = 1, n2, n3 = -Number.MAX_VALUE) {
  let enBuyuk;
  if (n1 >= n2 && n1 >= n3) {
    enBuyuk = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    enBuyuk = n2;
  } else if (n3 >= n1 && n3 >= n2) {
    enBuyuk = n3;
  }
  return enBuyuk;
};

console.log("Girilen sayıların en bğyğğü:", buyukBul2(-8, -9));

//**************************************************/
const topla = function (s1, s2) {
  return s1 + s2;
};

const cikar = function (s1, s2) {
  return s1 - s2;
};
const bol = function (s1, s2) {
  return s1 / s2;
};
const carp = function (s1, s2) {
  return s1 * s2;
};

const hesapla = function (s1, s2, islem) {
  let sonuc = 0;
  switch (islem) {
    case "+":
      sonuc = topla(s1, s2);
      break;
    case "-":
      sonuc = cikar(s1, s2);
      break;
    case "/":
      sonuc = bol(s1, s2);
      break;
    case "*":
      sonuc = carp(s1, s2);
      break;
    default:
      break;
  }
  return sonuc;
};

console.log(hesapla(3, 5, "+"));
console.log(hesapla(4, 3, "/"));
//**************************************************/

const topla2 = function (s1, s2) {
  return s1 + s2;
};

const cikar2 = function (s1, s2) {
  return s1 - s2;
};
const bol2 = function (s1, s2) {
  return s1 / s2;
};
const carp2 = function (s1, s2) {
  return s1 * s2;
};

const hesapla2 = function (s1, s2, islem) {
  let sonuc = 0;
  switch (islem) {
    case "+":
      return topla2(s1, s2);

    case "-":
      return cikar2(s1, s2);

    case "/":
      return bol2(s1, s2);

    case "*":
      return carp2(s1, s2);

    default:
      break;
  }
};

console.log(hesapla2(3, 5, "+"));
console.log(hesapla2(4, 3, "/"));
