const countryDiv = document.querySelector(".container")
const select = document.getElementById("select")
const fecthcountryname = (name) => {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        renderError(`Something Wrong : ${res.status}`);
        throw new Error();
      }
      return res.json();
    })
    .then((data) =>renderCountries(data))
     .catch((err) => console.log(err));
    
};

fecthcountryname();


const renderError = () => {
  document.querySelector("body") = `
  <h2>News Cant Be Fetched </h2>
  <img src="./404.png" alt="">`;

};

const renderCountries = (data) =>{
    // console.log(data);


 let names = data.map((data) => data.name.common).sort();
  names.forEach((item) => {
    select.innerHTML += `
    <option value="${item}">${item}</option> `;});


    select.addEventListener("change",(e) => {

    console.log(e.target.value);

     data.filter((data) => {

        
   const {
      capital,
      currencies,
      flags: { svg },
      languages,
      name: { common },
      region,
      maps: { googleMaps },
    } = data;
     
if(common == e.target.value){

countryDiv.innerHTML =`
    <div class="card mx-auto m-3 shadow-lg" style="width: 18rem;">
      <img src="${svg}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${common}</h5>
        <p class="card-text">${region}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <i class="fas fa-lg fa-landmark"></i> ${capital}
        </li>
        <li class="list-group-item">
          <i class="fas fa-lg fa-comments"></i> ${Object.values(languages)}
        </li>
        <li class="list-group-item">
          <i class="fas fa-lg fa-money-bill-wave"></i>
          ${Object.values(currencies).map((item) => Object.values(item) + " ")}
       </li>
      </ul>
      <div class="card-body">
        <a href="${googleMaps}" class="card-link">Google Map</a> 
      </div>
    </div>

`;;
      }
    });
});

};