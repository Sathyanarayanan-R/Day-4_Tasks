
const request1 = new XMLHttpRequest();

request1.open('GET', 'https://restcountries.com/v3.1/all');

request1.send(null);

request1.onload = function () {
  const countries = JSON.parse(request1.responseText);

  for (var i = 0; i < countries.length; i++) {
    const { flag } = countries[i];
    console.log(flag);
  }
}