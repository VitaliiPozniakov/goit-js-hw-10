import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { makeCountryMarkup } from './makeCountryMarkup';
import { makeCountriesListMarkup } from './makeCountriesListMarkup'
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
//   console.log(e.target.value)
const inputSymbols = e.target.value.trim() 

console.log(inputSymbols)

if (inputSymbols === null || inputSymbols === ``) {
//   alert(`Invalid value`);
refs.countryInfo.innerHTML = ''
refs.countryList.innerHTML = ''

  return
}

  
  const promiseCountryArr =  fetchCountries(inputSymbols)


//   promiseCountryArr.then(
//       (resolve) => console.log(resolve.length)
//   )


        promiseCountryArr
        .then(makeCountriesListMarkup)
        .then(renderCountriesList);

        promiseCountryArr.then(makeCountryMarkup)
        .then(renderCountryCard);


    //   if (resolve.length > 1) {
    //     .then(makeCountriesListMarkup)
    //     .then(renderCountriesList);
    //   } else {
    //     .then(makeCountryMarkup)
    //     .then(renderCountryCard);
    //   }

  









}

function renderCountryCard(countryMarkup) {
  refs.countryInfo.innerHTML = countryMarkup;
}

function renderCountriesList (countriesListMarkup) {
    refs.countryList.innerHTML = countriesListMarkup;
  }

