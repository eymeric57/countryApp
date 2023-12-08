// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable
let country = [];

 async function fetchCountry() {

   await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) =>(country = data));

    for (let i = 0; i < 250; i++)
    console.log(country[i]);
    
}



const countryDisplay = async () => {
    await fetchCountry();

    document.body.innerHTML = country.map(
    (countries) => 
    `
    <div class="countries-container">
        <div class="country">
            <img src="${countries.flags.png}">

                <p>${countries.name}</p>
        </div>
    </div>
    
    `
    
    )
    join()
}

countryDisplay()


// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
