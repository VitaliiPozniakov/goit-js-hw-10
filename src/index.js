import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { makeCountryMarkup } from './makeCountryMarkup';
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
    .then(makeCountryMarkup)
    .then(renderCountryCard);

  console.log(fetchCountries(e.target.value));
}

function renderCountryCard(countryMarkup) {
  refs.countryInfo.innerHTML = countryMarkup;
}

// if (word === null || word.trim() === ``) {
//   alert(`Invalid value`);
