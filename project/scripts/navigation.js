const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#navigation-menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});