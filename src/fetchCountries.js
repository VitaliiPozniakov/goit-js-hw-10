 const BASE_URL = 'https://restcountries.com/v3.1'

 export function fetchCountries(name) {
    fetch(`${BASE_URL}/name/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}


// export default {fetchCountries} 

