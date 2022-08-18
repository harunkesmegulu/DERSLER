// let i= 1;
// for(let i =1; i<=5; i++){
//     console.log(i);
// }
// for(let i =6; i>=1; i--){
//     console.log(i);
// }
// for(let i =6; i>=1; i--){
//     console.log(i);
// }
//////////////////////////////////////////////////////?
// const n = Number(prompt("Enter number"));
// let result = 0;
// for(let i =1; i<=n; i++){
//     // result = result + 1;
//     result += i;
//     console.log(result, i)
    
// }
// console.log("Result:", result);

////////////////////////////////////////////////?

//* NOT:
//* Math.floor() =>en yakın alt tam sayıya yuvarlar
//* Math.ceil() =>en yakın ust tam sayıya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.
//*her yeni değerde const a değer atamaz. yeni bir const üretir. bu yüzden hata vermez.


// for (let i = 1; i<= 10; i++){
//     const random = Math.floor(Math.random()*100);
//     console.log(random);
// }

//////////////?
// let array = []
//         let sayı1 = +prompt("bir sayı giriniz")
//         for (i=2; i<sayı1; i++){
//             if(sayı1%i==0){
//                 array.push(i)
//             }
//         }
//         console.log(array)
//         if(array.length>0){
//                 console.log("asal değil")
                
//             }
//         else{
//                 console.log("asal sayı")
//             }

// const number = Number(prompt("Enter pozitif number"));
// let asal //= true;
// if(number <= 1){
//     alert("Number is mut be bigger then 1");
// }else{
//     for(let i=2 ; i<number ; i++){
//         if(number% i===0){
//             asal = false;
//             break;
//         }
//     }
//     const result = asal === true ? "ASALDIR":"ASAL DEĞİLDİR";
//     console.log(`$(number) ${result}`)
// }
// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================



//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.
console.log("****** WHILE *******");
let not = +promp("Please enter your not.");
while (not < o  || not > 100){
    console.log("yOUR NOT MUST BE BEETWEN 0-100");
    not = prompt("yOUR NOT MUST BE BEETWEN 0-100");
}
console.log("Girdiğiniz not:", not);


// if le döngü olmuyor
// if (){
//     alert("yOUR NOT MUST BE BEETWEN 0-100")
// }


//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let not = +promp("Please enter your not.");

//     console.log("yOUR NOT MUST BE BEETWEN 0-100");
//     not = prompt("yOUR NOT MUST BE BEETWEN 0-100");
// }while (not < o  || not > 100){
// console.log("Girdiğiniz not:", not);