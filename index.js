// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable
var countryCt = document.querySelector(".countries-container")
let country = [];

async function fetchCountry() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (country = data));

  for (let i = 0; i < 250; i++) console.log(country[i]);
}

const countryDisplay = async () => {
  await fetchCountry();

 countryCt.innerHTML = country
    .map(
      (countries) =>
        `

    <div class="countryBox">
    <div class="country">
        <div class="flag">
            <img src="${countries.flags.png}">
        </div>
        <div class="countryName">
                <h2>${countries.name.common}</h2>
        </div>
        <div class="capital">
                <h3>${countries.capital}</h3>
        </div>
        <div class="population">
        <p>Population : ${countries.population}</p>
        </div>
        </div>
    </div>
    
    `
    )
    .join("");
};

countryDisplay();

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
