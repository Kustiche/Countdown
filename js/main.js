import { countdown } from "./countdown.js";
import { form, formDate, textEvent } from "./view.js";
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
    textEvent.value = JSON.parse(localStorage.getItem('textEvent'));
    countdown();
  };
};

localData();

datepicker();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  countdown();
});