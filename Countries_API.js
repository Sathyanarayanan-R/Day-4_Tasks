
const request2 = new XMLHttpRequest();

request2.open('GET', 'https://restcountries.com/v3.1/all');

request2.send(null);

request2.onload = function () {
  const countries = JSON.parse(request2.responseText);

  for (var i = 0; i < countries.length; i++) {
    const { name: { common }, region, subregion, population } = countries[i];
    console.log('Country: ***', common, '*** | Region:', region, '| Subregion:', subregion, '| Population:', population);
  }
}
