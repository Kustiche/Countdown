import { countdown } from "./countdown.js";
import { btnCookieMessage, cookieMessage, form, formDate, textPhenomen } from "./view.js";
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

let objectCookies = {};
const date = new Date();
date.setTime(date.getTime() + 1 * 60 * 60 * 1000);

function datepicker() {
  new AirDatepicker('.calendar', {
    isMobile: true,
    autoClose: true,
    buttons: ['today', 'clear']
  });
};

function localData() {
  const isLocalStorageEnteredDate = JSON.parse(localStorage.getItem('enteredDate')) !== null;

  if (isLocalStorageEnteredDate) {
    formDate.value = JSON.parse(localStorage.getItem('enteredDate'));
    textPhenomen.value = JSON.parse(localStorage.getItem('textPhenomen'));
    countdown();
    formDate.value = '';
    textPhenomen.value = '';
  };
};

function fillingCookie() {
  document.cookie = `namePhenomen=${textPhenomen.value}; expires=` + date.toUTCString();
};

let i = 0;
const arrayAllCookies = document.cookie.split('; ');

function getCookie() {
  const objectElement = arrayAllCookies[i].split('=');
  objectCookies[objectElement[0]] = objectElement[1];
  i++;
  if (i > arrayAllCookies.length) {
    getCookie();
  };
};

getCookie();

localData();

textPhenomen.value = objectCookies.namePhenomen ?? '';

datepicker();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  countdown();
});

textPhenomen.addEventListener('input', () => {
  if (cookieMessage.className === 'cookie hidden') {
    fillingCookie();
  };
});

btnCookieMessage.addEventListener('click', () => {
  cookieMessage.classList.add('hidden');
});