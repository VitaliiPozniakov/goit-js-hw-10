import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { makeCountryMarkup } from './makeCountryMarkup';
import { makeCountriesListMarkup } from './makeCountriesListMarkup'
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import compiledTemplate from "./templates/country-card.hbs";
import CountriesApiService from './countriesApiServise';

const DEBOUNCE_DELAY = 300;

const countriesApiServise = new CountriesApiService



const refs = {
  input: document.querySelector(`#search-box`),
  countryList: document.querySelector(`.country-list`),
  countryInfo: document.querySelector(`.country-info`),
};

refs.input.addEventListener(`input`, debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
//   console.log(e.target.value)
const inputSymbols = e.target.value.trim() 

countriesApiServise.query = e.target.value.trim() 

// console.log(inputSymbols)

if (inputSymbols === null || inputSymbols === ``) {
//   alert(`Invalid value`);
refs.countryInfo.innerHTML = ''
refs.countryList.innerHTML = ''
  return
}

  

const promiseCountryArr = countriesApiServise.fetchCountries()

// console.log(promiseCountryArr)

        promiseCountryArr
        .then(makeCountriesListMarkup)
        .then(renderCountriesList)
        .catch(showError);

        promiseCountryArr
        .then(makeCountryMarkup)
        .then(renderCountryCard)
        .catch(showError);
        

//   promiseCountryArr.then(
//       (resolve) => console.log(resolve.length)
//       if (resolve.length > 1) {
//         .then(makeCountriesListMarkup)
//         .then(renderCountriesList);
//       } else {
//         .then(makeCountryMarkup)
//         .then(renderCountryCard);
//       }


//   )

}



function renderCountryCard(countryMarkup) {
  refs.countryInfo.innerHTML = countryMarkup;
}

function renderCountriesList (countriesListMarkup) {
    refs.countryList.innerHTML = countriesListMarkup;
  }

  function showError (error) {
   return Notify.failure('Oops, there is no country with that name');
  }

