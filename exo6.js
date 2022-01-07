const axios = require('axios')

axios.get('https://swapi.py4e.com/api/starships/10')
    .then(function (res) {
      console.log(res.data.name);
    })
    .catch(function (error) {
      console.log(error.res.data.detail);
});

axios.get('https://swapi.py4e.com/api/planets')
    .then(function (res) {
      console.log(res.data.count);
    })
    .catch(function (error) {
      console.log(error.res.data.detail);
});

axios.get('https://swapi.py4e.com/api/people?search=darth%20vader')
    .then(function (res) {
      console.log(res.data.results[0].birth_year);
    })
    .catch(function (error) {
      console.log(error);
});

axios.get('https://swapi.py4e.com/api/people/13?format=wookiee')
    .then(function (res) {
      console.log(res.data.whrascwo);
    })
    .catch(function (error) {
      console.log(error.res.data.detail);
});

axios.get('https://swapi.py4e.com/api/people?search=r2')
    .then(function (res) {
      const planet = res.data.results[0].homeworld;

    axios.get(planet)
        .then(function (res) {
          console.log(res.data.name);
        }).catch(function (error) {
          console.log(error);
        })
    })
    .catch(function (error) {
      console.log(error);
});
