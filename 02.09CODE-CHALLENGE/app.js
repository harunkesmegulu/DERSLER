// const email = prompt (`Please enter your email`);
// let caharsEmail = email.split("");
// // console.log(caharsEmail);
// const checkMail = function (n1, n2, n3 = -Number.MAX_VALUE) {
//     let dogru;
// if (let i = 0 = "@" , i=0, i++ <Number.MAX_VALUE) {
//     dogru = n(i);
//   } else if (n2 >= n1 && n2 >= n3) {
//     enBuyuk = n2;
//   } else  {
//     const email = prompt (`Please enter your valid email`);
//   }
//   return enBuyuk;
// };

// const email = prompt (`Please enter your email`);

// function isValid(frm) {
//     let atpos = email.indexOf("@");
//     let dotpos = email.lastIndexOf(".");
//     if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
//       alert("Invalid");
//       return false;
//     } else {
//       alert("Valid");
//       return true;
//     }
//   }

const email = prompt (`Please enter your email`);

function isValid(frm) {
    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      alert("Invalid");
      return false;
    } else {
        const splited = email.splited("@");
        const firstPart = splited[0];
        const secondPart = splited[1];
        const checked = firstPart.split("");
        console.log(checked);
    }
  }



// const emailValidation = email => {
//     const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     email.match(emailformat) ? alert("Valid email address!"): alert("You have entered an invalid email address!");
//   }
//   emailValidation('can.ocalir@gmail.com')


//   SSN için regex formatı:
// /^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$/