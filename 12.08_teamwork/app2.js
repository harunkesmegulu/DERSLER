// let text = "jsndfvwwwwpjnwpe";
// let a = txt.length;
// console.log(a);

// let str = "apple, banana, kiwi"
// let part = str.slice(1, 13);
// console.log(part);

// text_part = txt.slice(2,5);
// console.log(text_part);

// let str = "apple, banana, kiwi" //pozitif değerlerde soldan sağa doğru sayarak yapılır.
// // let part = str.slice(-12, -6); //0 start point .. sağdan sola sıralama yapılır.
// // console.log(part);

// let part = str.slice(7);
// console.log(part);
// let part2 = str.slice(7,13);
// console.log(part2);

// let part3 = str.substring(7);
// console.log(part3);

// let part4 = str.slice(0);
// console.log(part4);

// let part5 = str.substring(-1);
// console.log(part5);

// let part6 = str.substr(7,6); //7 den sonra 6 karakter
// console.log(part6);

// let part7 = str.substr(-4); //-4 sondan başa sayıp geldiği yerden sona kadarki bölümü alır
// console.log(part7);

// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "w3schools");
// console.log(newText);

// let text2 = "Please visit Microsoft! Please visit Microsoft! Please visit Microsoft! Please visit Microsoft!";
// let newText2 = text2.replace("Microsoft", "w3schools");
// console.log(newText2);

// let text3 = "Please visit Microsoft! Please visit Microsoft! Please visit Microsoft! Please visit Microsoft!";
// let newText3 = text3.replace(/MICROSOFT/i , "w3schools"); //BÜYÜK KÜÇÜK UYUMUNU KALDIRIR. insensitive
// console.log(newText3);

// let text4 = "Please visit Microsoft! Please visit Microsoft! Please visit Microsoft! Please visit Microsoft!";
// let newText4 = text4.replace(/Microsoft/g , "w3schools"); //global mach
// console.log(newText4);

// let text5 = "Please visit Microsoft! Please visit Microsoft! Please visit Microsoft! Please visit Microsoft!";
// let newText5 = text5.replace(/Microsoft/gi , "w3schools"); //combo
// console.log(newText5);

// let text1 = "Hello Word";
// let text2 = text1.toUpperCase();
// let text3 = text1.toLowerCase();
// let text4 = text1.concat(text2).concat(text2);


// console.log(text2);
// console.log(text3);
// console.log(text4);

// let text1 = "       Hello Word      ";
// let text2 = text1.toUpperCase();
// console.log(text2.trim());
// console.log(text2.trim().length);

// let text = "333",
// let padded = text.padstart(4,"0");
// console.log(padded);

// let numb = 5;
// let text2 =numb.toString();
// let padded2 = text2.padStart(4,"0");
// console.log(typeof numb);
// console.log(typeof text2);

// let str = "dffgg";
// let text4 =parseInt(str);
// console.log(typeof text4);

// let text = "abcdefgsss";
// let char = text.charCodeAt(3);
// console.log(char);

let text = "HELLO , World!";
console.log(text.split(",")); //make it array
console.log(text.split(",")[0]); //array elemanı gönder
console.log(text.split(",")[1]); //array elemanı gönder
console.log(text.split("")[1]);