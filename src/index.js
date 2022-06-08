import './css/styles.css';
import {fetchCountries} from "./fetchCountries";
import debounce from 'lodash.debounce';

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
}


function renderCountriesCards (countries) {

}



// if (word === null || word.trim() === ``) {
    //   alert(`Invalid value`);



