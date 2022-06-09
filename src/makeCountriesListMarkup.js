
export function makeCountryMarkup (countriesArr) {
    return countriesArr
    .map(({name: {official}, flags:{svg}}) => {
       
      return `
      <li>
<img class='flag'
alt="${official}"
src="${svg}"
width="50"
height="30"
/>
<h2>${official}</h2>
</li>
          `;    
        })
    .join("");
}
