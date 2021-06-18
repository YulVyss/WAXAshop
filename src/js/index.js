import './menu.js';
import './sliders';
import '../scss/style.scss';
import Swiper from 'swiper';

let readMore = document.querySelectorAll('.saphir__text-link');
let textToShow = document.querySelectorAll('.saphir__description span');

for (let i = 0; i < readMore.length; i++) {
  let link = readMore[i];
  let text = textToShow[i];
  link.addEventListener("click", function (e) {
    text.style.display = 'block';
    link.style.display = "none";
  });
}
