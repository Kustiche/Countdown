import { countdown } from "./countdown.js";
import { button, formDate, textEvent } from "./view.js";
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('.calendar', {
  isMobile: true,
  autoClose: true,
  buttons: ['today', 'clear']
})

const isLocalStorageEnteredDate = JSON.parse(localStorage.getItem('enteredDate')) !== null;

if (isLocalStorageEnteredDate) {
  formDate.value = JSON.parse(localStorage.getItem('enteredDate'));
  textEvent.value = JSON.parse(localStorage.getItem('textEvent'));
  countdown();
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  countdown();
});