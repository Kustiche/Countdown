import { countdown } from "./countdown.js";
import { form, formDate, textPhenomen } from "./view.js";
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

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
  };
};

localData();

datepicker();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  countdown();
});