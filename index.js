
var countryCt = document.querySelector(".countries-container")
let country = [];



async function fetchCountry() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (country = data));

  for (let i = 0; i < 250; i++) console.log(country[i]);
}


inputSearch.addEventListener("input", (e) => {
 fetchCountry(inputSearch.value);

 
})


const countryDisplay = async () => {
  await fetchCountry();

 countryCt.innerHTML = country
 .filter((country) => country.nomdupays.includes(inputSearch.value))
    .map(
      (countries) =>
        `

    <div class="countryBox">
    <div class="country">
        <div class="flag">
            <img src="${countries.flags.png}">
        </div>
        <div class="countryName">
                <h2>${countries.translations.fra.common}</h2>
        </div>
        <div class="capital">
                <h3>${countries.capital}</h3>
        </div>
        <div class="population">
        <p>Population : ${countries.population} </p>
        </div>
        </div>
    </div>
    
    `
    )
    .join("");
};

countryDisplay();



// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données


// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
