// header scroll
let header = document.querySelector('.header__inner');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 500) {
    header.classList.add('header__inner--mini');
  } else {
    header.classList.remove('header__inner--mini');
  }
});

// menu
let menu = document.querySelector('.header__menu-inner');
let overlay = document.querySelector('.header__overlay');
let btnClose = document.querySelector('.header__menu-closed');
let btnOpen = document.querySelector('.header__menu-btn');
let body = document.body;

btnClose.addEventListener('click', () => {
  overlay.classList.remove('header__overlay--active');
  menu.classList.remove('header__menu-inner--active');
  body.style.overflow = '';
});

btnOpen.addEventListener('click', () => {
  overlay.classList.add('header__overlay--active');
  menu.classList.add('header__menu-inner--active');
  body.style.overflow = 'hidden';
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('header__overlay--active');
  menu.classList.remove('header__menu-inner--active');
  body.style.overflow = '';
});
