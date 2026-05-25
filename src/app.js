// // import { alert, success, error } from "@pnotify/core";

// // import "@pnotify/core/dist/PNotify.css";

// // import "@pnotify/core/dist/BrightTheme.css";

// // success({
// //   text: "Підключено!",
// // });

// // const formRef = document.querySelector(".form");
// // const inputRef = document.querySelector(".input");
// // formRef.addEventListener("input", (e) => {
// //   const search = e.target.value;
// //   console.log(search);
// // });

// // let sourche = ""

// // formRef.addEventListener("input", debounce((e) => {
// //   let search = e.target.value

// //   fetch(
// //           `https://restcountries.com/v2/name/${search}`
// //         ).then((res) => res.json()).then((res) => console.log(res)
// //         );
// // }, 500))


// // function countryInfo(arr) {
// //   const items = arr.map((country) => {
// //     const languagesList = country.languages
// //       .map((lang) => `<li>${lang}</li>`)
// //       .join("");

// //     return `
// //       <div class="country-card">
// //         <h2>${country.name}</h2>
        
// //         <div class="country-content">
// //           <div class="country-info">
// //             <p>Capital: ${country.capital}</p>
// //             <pPopulation: ${country.population}</p>
// //             <p>Languages:</p>
// //             <ul>
// //               ${languagesList}
// //             </ul>
// //           </div>
          
// //           <div class="country-flag">
// //             <img src="${country.flagURL}">
// //           </div>
// //         </div>
// //       </div>
// //     `;
// //   }).join("");

// //   listRef.innerHTML = items;
// // }






// import { alert, success, error } from '@pnotify/core';

// import '@pnotify/core/dist/PNotify.css';

// import '@pnotify/core/dist/BrightTheme.css';

// success({
//   text: "Підключено!"
// });

// import debounce from 'debounce';

// const formRef = document.querySelector(".form");
// const inputRef = document.querySelector(".input") 
// const htmlRef = document.querySelector(".Ourcountry")



// // formRef.addEventListener("input", (e) => {

// //     const search = e.target.value;
// // console.log(search);
// // })


// // const response = await fetch(
// //           `https://restcountries.com/v2/name/${search}`
// //         );



//         ///uploadImage(res.hits)

        


// let sourche = ""

// formRef.addEventListener("input", debounce((e) => {
//   let search = e.target.value

//   fetch(
//           `https://restcountries.com/v2/name/${search}`
//         ).then((res) => res.json()).then((res) => countryInfo(res)
//         );
// }, 500))


// function countryInfo(arr) {
// const languagesList = country.languages.map((lang) => `<li>${lang}</li>`)
//       .join("");

//     return `
//       <div class="country-card">
//         <h2>${country.name}</h2>
        
//         <div class="country-content">
//           <div class="country-info">
//             <p>Capital: ${country.capital}</p>
//             <p>Population: ${country.population}</p>
//             <p>Languages:</p>
//             <ul>
//               ${languagesList}
//             </ul>
//           </div>
          
//           <div class="country-flag">
//             <img src="${country.flag}">
//           </div>
//         </div>
//       </div>
//     `;
//   }).join("");

//   htmlRef.innerHTML = items;
// }





import { alert, success, error } from '@pnotify/core';

import '@pnotify/core/dist/PNotify.css';

import '@pnotify/core/dist/BrightTheme.css';

success({
  text: "Підключено!"
});

import debounce from 'debounce';

const formRef = document.querySelector(".form");
const inputRef = document.querySelector(".input") 
const htmlRef = document.querySelector(".Ourcountry")



// formRef.addEventListener("input", (e) => {

//     const search = e.target.value;
// console.log(search);
// })


// const response = await fetch(
//           `https://restcountries.com/v2/name/${search}`
//         );



        ///uploadImage(res.hits)

        


let sourche = ""

inputRef.addEventListener("input", debounce((e) => {
  let search = e.target.value

  fetch(
          `https://restcountries.com/v2/name/${search}`
        ).then((res) => res.json()).then((res) => countryInfo(res)
        );
}, 500))


function countryInfo(arr) {

    if (arr.length == 1) {

        const items = arr.map((country) => {
    // const languagesList = country.languages
    //   .map((lang) => `<li>${lang}</li>`)
    //   .join("");

    const languagesList = country.languages.map((lang) => `<li>${lang.name}</li>`).join("");


    return `
      <div class="country-card">
        <h2>${country.name}</h2>
        
        <div class="country-content">
          <div class="country-info">
            <p>Capital: ${country.capital}</p>
            <p>Population: ${country.population}</p>
            <p>Languages:</p>
            <ul>
              ${languagesList}
            </ul>
          </div>
          
          <div class="country-flag">
            <img src="${country.flag}">
          </div>
        </div>
      </div>
    `;
  }).join("");

  htmlRef.innerHTML = items;

    } else {

        const items = arr.map((country) => {
 return `
      <ul class="country-card">
        <li>${country.name}</li>
      </ul>
    `;
  }).join("");

  htmlRef.innerHTML = items;
        
    }
  
}