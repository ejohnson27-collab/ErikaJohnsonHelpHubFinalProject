// select the dropdown and country info div
const countrySelect = document.getElementById('country-select');
const countryInfoDiv = document.getElementById('country-info');

// add event listener for when user selects a country
countrySelect.addEventListener('change', function() {
    const countryCode = countrySelect.value;

    // if nothing is selected, clear the country info div
    if (!countryCode) {
        countryInfoDiv.innerHTML = '';
        return;
    }

    // fetch data from REST Countries API
    fetch(`https://restcountries.com/v3.1/name/${countryCode}`)
        .then(response => response.json())
        .then(data => {
            const country = data[0];

            // extract relevant country info
            const countryName = country.name.common;
            const capital = country.capital ? country.capital[0] : 'N/A';
            const population = country.population.toLocaleString();
            const area = country.area ? `${country.area.toLocaleString()} km²` : 'N/A';
            const languages = Object.values(country.languages).join(', ');
            const flagUrl = country.flags[0];

            // display country details
            countryInfoDiv.innerHTML = `
                <h2>${countryName}</h2>
                <img src="${flagUrl}" alt="${countryName} flag">
                <div class="country-details">
                    <p><strong>Capital:</strong> ${capital}</p>
                    <p><strong>Population:</strong> ${population}</p>
                    <p><strong>Area:</strong> ${area}</p>
                    <p><strong>Languages:</strong> ${languages}</p>
                </div>
            `;
        })
        // catch in case of api error
        .catch(error => {
            console.error('Error fetching country data:', error);
            countryInfoDiv.innerHTML = '<p>Sorry, we couldn\'t retrieve country information. Please try again later.</p>';
        });
});