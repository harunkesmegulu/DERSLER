//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================
//** 1-100 arası sayı tut */


const randomNumber = Math.floor(Math.random() * 100) +1;
console.log(randomNumber);

//** check butonu basıldığında girilen sayıyı kontrel et */
document. querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value);
    // console.log(guessInput)
    const msg = document.querySelector(".msg");



    //** eğer sayı girilmediyse kullanıcıya uyarı ver */
    
if (!guessInput){
    msg.innerText = "Please enter a number";
    }else if (randomNumber === guessInput) {
        msg.innerText = `Congragulation You Win 😍 <i class="fa-regular fa-face-awesome"></i> `;
        body.className = "bg-success";
    }



})

  

//** eğer rasgele == input.value (tebrikler) background rengi yeşil....eger top score > topScore topscore = score secret-number visible*/

//** değilse eğer score >0 sa score = score -1 */
//** eğer rasgele tutulan sayı input value dan küçükse AZALT demek gerek değilse artır...*/


//** 1-100 arası sayı tut */