const countries = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Filipina', 'Kamboja', 'Amerika Serikat', 'Inggris', 'Timor Leste'];

function findCountry(input) {
    const matchedCountries = countries.filter(country => country.toLowerCase().includes(input.toLowerCase()));
    return matchedCountries.length > 0 ? matchedCountries.join(', ') : 'Tidak Ada';
}

console.log(findCountry('ing'))