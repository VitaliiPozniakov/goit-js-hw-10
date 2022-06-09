import './css/styles.css';
import { fetchCountries } from './fetchCountries';
// import { makeCountryMarkup } from './makeCountryMarkup';
// import { makeCountriesListMarkup } from './makeCountriesListMarkup'
import debounce from 'lodash.debounce';
// import compiledTemplate from "./templates/country-card.hbs";

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector(`#search-box`),
  countryList: document.querySelector(`.country-list`),
  countryInfo: document.querySelector(`.country-info`),
};

refs.input.addEventListener(`input`, debounce(onInputChange, 300));

function onInputChange(e) {
  // console.log(e.target.value)

  fetchCountries(e.target.value)
    .then((countriesArr) => {
        return countriesArr
        .map((country) => {
           
          return `
    
          <li>
    <img class='flag'
    alt="${country.name.official}"
    src="${country.flags.svg}"
    width="50"
    height="30"
    />
    <h2>${country.name.official}</h2>
    </li>
    
              `;    
            })
        .join("");
    })
    .then(renderCountriesList);

    // console.log(countriesArr)

    // fetchCountries(e.target.value)
    // .then(makeCountryMarkup)
    // .then(renderCountryCard);

}

function renderCountryCard(countryMarkup) {
  refs.countryInfo.innerHTML = countryMarkup;
}

function renderCountriesList (countriesListMarkup) {
    refs.countryList.innerHTML = countriesListMarkup;
  }

// if (word === null || word.trim() === ``) {
//   alert(`Invalid value`);
