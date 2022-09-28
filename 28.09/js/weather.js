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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;
    try {
        const response = await fetch(url).then(response => response.json());
        console.log(response);
        const { main, sys, weather, name } = response;

        const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
        const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

        const cityNameSpans = list.querySelectorAll(".city span");
        const cityNameSpansArray = Array.from(cityNameSpans);
        if (cityNameSpansArray.length > 0) {
            const filteredArray = cityNameSpansArray.filter(span => span.innerText == name);
            if (filteredArray.length > 0) {
                msg.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
                setTimeout(() => {
                    msg.innerText = "";
                }, 5000);
                form.reset();
                return;
            }
        }
        console.log(cityNameSpans);
        const createdLi = document.createElement("li");
        createdLi.classList.add("city");
        createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${sys.country}">
                                <span>${name}</span>
                                <sup>${sys.country}</sup>
                            </h2>
                            <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                            <figure>
                                <img class="city-icon" src="${iconUrl}">
                                <figcaption>${weather[0].description}</figcaption>
                            </figure>`;
        //append vs. prepend
        list.prepend(createdLi);
        form.reset();
    }
    catch (error) {
        console.log(error);
        msg.innerText = `404 (City Not Found)`;
        setTimeout(() => {
            msg.innerText = "";
        }, 5000);
        form.reset();
    }
};

//* Math.floor() => surekli asagiya yuvarlar   49.9-->49 yapar
//* Math.ceil()  => sürekli yukariya yuvarlar  49.1-->50 yapar
//* Math.round() => degerine gore yuvarlar.    49.4-->49  49.6-->50
//* Math.trunc() => kesirli sayinin tam kismini alir.  49.1 veya 49.9 --> 49