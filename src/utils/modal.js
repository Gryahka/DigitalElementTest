let modal = document.querySelector('.custom-modal');
let modalContainer = document.querySelector('.custom-modal__container');
let btnOpen = document.querySelector('.team__btn');
let btnClose = document.querySelector('.form__close');

let body = document.body;

btnOpen.addEventListener('click', () => {
  modal.classList.add('custom-modal--active');
  modalContainer.classList.add('custom-modal__container--active');

  body.style.overflow = 'hidden';
});

btnClose.addEventListener('click', () => {
  modal.classList.remove('custom-modal--active');
  modalContainer.classList.remove('custom-modal__container--active');

  body.style.overflow = 'auto';
});

// validation
let btnSend = document.querySelector('.form__btn');

btnSend.addEventListener('click', () => {
  let nameWrap = document.getElementById('name-wrap');
  let name = document.getElementById('name');

  let emailWrap = document.getElementById('email-wrap');
  let email = document.getElementById('email');

  let messageWrap = document.getElementById('message-wrap');
  let message = document.getElementById('message');

  let nameValid = /^[a-zA-Zа-яА-ЯЁё ]+$/.test(name.value);

  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  let emailValid = EMAIL_REGEXP.test(email.value);

  if (nameValid) {
    nameWrap.classList.add('form__inner--correct');
    nameWrap.classList.remove('form__inner--error');
  } else {
    nameWrap.classList.add('form__inner--error');
    nameWrap.classList.remove('form__inner--correct');
  }

  if (emailValid) {
    emailWrap.classList.add('form__inner--correct');
    emailWrap.classList.remove('form__inner--error');
  } else {
    emailWrap.classList.add('form__inner--error');
    emailWrap.classList.remove('form__inner--correct');
  }

  if (message.value !== '') {
    messageWrap.classList.add('form__inner--correct');
    messageWrap.classList.remove('form__inner--error');
  } else {
    messageWrap.classList.add('form__inner--error');
    messageWrap.classList.remove('form__inner--correct');
  }

  if (nameValid && emailValid) {
  }
});

// popup
let modalSuccess = document.querySelector('.custom-popup');
