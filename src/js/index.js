import './menu.js';
import './sliders';
import '../scss/style.scss';

console.log("It's OK!")
let readMore = document.querySelector('.saphir__text-link');
let textToShow = document.querySelector('.saphir__description span');

readMore.addEventListener("click", function (e) {
  if(textToShow.style.display = 'none'){
    textToShow.style.display = 'block';
  } else {
    textToShow.style.display = 'none';
  }; 
})