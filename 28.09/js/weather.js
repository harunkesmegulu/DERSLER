const form = document.querySelector("section.top-banner form");
const input =document.querySelector(".container input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

localStorege.setItem("tokenKey", "2ab8debec704a8f127273360e53f0507");
//localStorege.setItem("tokenKeyEncryped", EncryptStringAES ("2ab8debec704a8f127273360e53f0507"));

form.addEventListener("submit", ()=>{
    getWeaderDataFormApi();
});
//Get api func. (http methods == Verbs)
const getWeatherDataFromApi = (e) =>{
    e.preventDefault();
    // alert("http request is gone!");
    const tokenKey = DecryptStringAES(localStorege.getItem("tokenKey"));
    alert(tokenKey);
    //alert(tokenKey);
    const inputValue = input.value;
    const units = "metric";
    const lang = "tr";
    const url = `https://api.openweatherorg/img/wn/${weather[0].icon}@2x.png`;
    const iconUrlAWS =`HTTPS`
    createdLi.cla
};

//* Math.floor() => surekli asagiya yuvarlar   49.9-->49 yapar
//* Math.ceil()  => sürekli yukariya yuvarlar  49.1-->50 yapar
//* Math.round() => degerine gore yuvarlar.    49.4-->49  49.6-->50
//* Math.trunc() => kesirli sayinin tam kismini alir.  49.1 veya 49.9 --> 49