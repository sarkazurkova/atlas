const staty = document.getElementById('staty');

function showCountriesByContinent(continent) {
    staty.innerHTML = '';

//<button type="button" onclick="cast=europe">Evropa</button>

fetch(`https://restcountries.com/v3.1/region/${continent}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(stat => {
            let blockCountry = `<div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 my-5">
        <div class="card">
            <a href="${stat.maps.googleMaps}">
            <img class="card-img-top" src="${stat.flags.png}" alt="${stat.name.official}" />
            </a>
            <div class="card-body">
            <h5 class="card-title"><a href="#" class="country-link"><b>${stat.translations.ces.common}</b></a></h5>
                <p class="card-text"><b>Počet obyvatel:</b><br> ${stat.population} <br>
                <b>Rozloha:</b><br> ${stat.area} km<sup>2</sup></p>
            
            </div>
        </div>
        
    </div>`;
    staty.innerHTML += blockCountry;
    });
        
        //staty.innerHTML= data[9].translations.ces.common;
    });
    const countryLinks = document.querySelectorAll('.country-link');
    countryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Zabraňuje výchozímu chování odkazu
            const index = Array.from(countryLinks).indexOf(link);
            const selectedStat = data[index];
            showModalWithCountryInfo(selectedStat.translations.ces.common, selectedStat.population, selectedStat.area);
        });
    });

}

document.addEventListener('DOMContentLoaded', function() {
    showCountriesByContinent('europe');
});

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        const continent = this.getAttribute('data-continent');
        showCountriesByContinent(continent);
    });
});
// Funkce pro zobrazení modálního okna s informacemi o státu
function showModalWithCountryInfo(name, flagUrl, population, area) {
    const modalTitle = document.getElementById('modal-title');
    const modalFlag = document.getElementById('modal-flag');
    const modalInfo = document.getElementById('modal-info');

    modalTitle.textContent = name;
    modalFlag.src = flagUrl;
    modalInfo.innerHTML = `Počet obyvatel: ${population}<br>Rozloha: ${area} km<sup>2</sup>`;

    // Zobrazení modálního okna
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    // Přidání událostního posluchače pro zavření modálního okna po kliknutí na ikonu "X"
    const closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Přidání událostního posluchače pro zavření modálního okna po kliknutí mimo okno
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
    