const staty = document.getElementById('staty');

fetch('https://restcountries.com/v3.1/region/europe')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(stat => {
            let blockCountry = `<div class="col-xl-1 col-lg-2 col-md-4 col-sm-6 my-5">
        <div class="card">
            <a href="${stat.maps.googleMaps}">
            <img class="card-img-top" src="${stat.flags.png}" alt="${stat.name.official}" />
            </a>
            <div class="card-body">
                <h5 class="card-title"><b>${stat.translations.ces.common}</b></h5>
                <p class="card-text"><b>Počet obyvatel:</b><br> ${stat.population} <br>
                <b>Rozloha:</b><br> ${stat.area} km<sup>2</sup></p>
               
            </div>
        </div>
        
    </div>`;
    staty.innerHTML += blockCountry;
    })
        
        //staty.innerHTML= data[9].translations.ces.common;
    });

    