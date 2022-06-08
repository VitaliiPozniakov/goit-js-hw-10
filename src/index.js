import './css/styles.css';
import {fetchCountries} from "./fetchCountries";
import { makeCountryMarkup } from './makeCountryMarkup';
import debounce from 'lodash.debounce';
// import compiledTemplate from "./templates/country-card.hbs";

const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector(`#search-box`),
    countryList:  document.querySelector(`.country-list`),
    countryInfo: document.querySelector(`.country-info`),
}

refs.input.addEventListener(`input`, debounce(onInputChange,
    300,))


function onInputChange (e) {

    // console.log(e.target.value)

    fetchCountries(e.target.value)
     .then(makeCountryMarkup   )
        .then(renderCountryCard)

console.log(    fetchCountries(e.target.value))


}





// function makeCountryMarkup (countriesData) {

//         return countriesData
//           .map((country) => {
//             return `
//             <svg class='flag'>
//   <use href='${country.flags.svg}'></use>
// </svg>
// <h2>${country.name.official}</h2>
// <p> <span class='bold-text'>Capital:</span>${country.capital}</p>
// <p><span class='bold-text'>Poppulation:</span>${country.population}</p>
// <p><span class='bold-text'>Languages: </span>${country.languages}</p>
//                 `;
//           })
//           .join("");
// }

function renderCountryCard (countryMarkup) {
    refs.countryInfo.innerHTML = countryMarkup
}



// if (word === null || word.trim() === ``) {
    //   alert(`Invalid value`);



