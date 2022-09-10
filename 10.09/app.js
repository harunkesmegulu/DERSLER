console.log("***** SELECTORS *****");

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1
//*-------------------------------------------

const h1 = document.getElementById("header");
console.log(h1);
h1.style.color = "white";
h1.style.background = "red";

//* EXAMPLE-2
//*-------------------------------------------

const myInput = document.getElementById("input");
const button = document.getElementById("btn");
button.style.background = "black";
button.style.color = "white";
button.style.width = "7rem";
button.style.border = "none";
button.style.borderRadius = "10px";
button.style.padding = "1rem";
button.style.fontSize = "1.1rem";
myInput.style.padding = "1rem";

//* EXAMPLE-3
//*-------------------------------------------

const list = document.getElementsByTagName("li");
console.log(list);
list[2].style.color ="red";
list.item(3).style.color ="blue"
const elementThree =list.item(4);
elementThree.style.color ="grey"
elementThree.textContent = "React/vue /Angular";

list[4].innerText ="Django / Flask";
console.log(list[1].textContent);
console.log(list[1].innerText);

//***HTML KODLARINI ÇALIŞTIRIR FAKAT GÜVENLİ DEĞİLDİR. HACKER LAR BU KOD İÇERİSİNE KOMUT GÖMEREK ŞİFRELERİNİZE ERİŞİM SAĞLAYABİLİR. */

list[4].innerHTML = "<a href=`https://www.google.com`>Google </a>";

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ------------------------------------------
const myList = document.getElementsByClassName("list");
console.log(myList); //? HTML Collection
console.log(myList[0].innerText);

//? HRML Collection'larda Dizi metotlari dogrudan kullanilamaz.
//? Spread ve Array.from() ile kullanilabilri hale gelir.

//?Array.from()
const myListArray = Array.from(myList);
myListArray.forEach((item) => console.log(item.innerText));

//?Spread
[...myList].forEach((item) => console.log(item.innerText));

[...myList].forEach((item) => (item.style.color = "red"));


//* ========================================
//*              QUERYSELECTOR()
//* ========================================