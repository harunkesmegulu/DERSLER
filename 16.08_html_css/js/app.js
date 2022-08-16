
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/aim/));

console.log(text.includes("rain"));
console.log(text.startsWith("hello",1));
console.log(text.startsWith("in", 5));

let text2 = "Therainin SPAIN stays mainly in the plain";
console.log(text2.startsWith("in", 5));
console.log(text.endsWith("main"));

let text3 = "Therainin SPAIN stays main";

console.log(text3.endsWith("main"));
console.log(text3.endsWith("spain",15));

let text4 = `Therainin
 SPAIN stays
  mainly in t
  he plain`;

let text 


/* "" parantezi ile cümle bölmek için / kullanmak gerekiyor yoksa satır atlatamıyorsun, `` ile alt satıra geçebiliyorsun.*/
//   let text5 = "Therainin
//  SPAIN stays
//   mainly in t
//   he plain";

