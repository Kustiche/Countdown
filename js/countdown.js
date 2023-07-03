import moment from "moment/moment";
import { countdownOutput, formDate, innerDate, innerTextPhenomen, textPhenomen } from "./view.js";

function selectionDeclension(number, terms) {  
    const moreHundreds = Math.abs(number) % 100; 
    const lessHundreds = moreHundreds % 10;
    if (moreHundreds > 10 && moreHundreds < 20) { return terms[2]; }
    if (lessHundreds > 1 && lessHundreds < 5) { return terms[1]; }
    if (lessHundreds == 1) { return terms[0]; }
    return terms[2];
}

export function countdown() {
  const isValueFormDate = formDate.value === '';
  const isValueTextPhenomen = +textPhenomen.value === 0;

  if (isValueFormDate) {
    innerDate.classList.add('padding-error');
    innerTextPhenomen.classList.remove('padding-error');
    return;
  }else if(isValueTextPhenomen){
    innerTextPhenomen.classList.add('padding-error');
    innerDate.classList.remove('padding-error');
    return;
  }else {
    innerTextPhenomen.classList.remove('padding-error');
    innerDate.classList.remove('padding-error');
    const enteredDate = moment(formDate.value, 'DD-MM-YYYY');
    const formDateYears = moment(formDate.value, 'DD-MM-YYYY').year();
    const currentDate = moment();
    const isEnteredDate = moment(enteredDate) < moment(currentDate)

    localStorage.setItem('enteredDate', JSON.stringify(formDate.value));
    localStorage.setItem('textPhenomen', JSON.stringify(textPhenomen.value));

    if (isEnteredDate) {
      window.modalErrorDatePast.show();
      return;
    };

    let isLeapYear = '';
    let leapYears = 0;

    for (let currentDateYears = moment().year(); currentDateYears <= formDateYears; currentDateYears++) {
      isLeapYear = moment([currentDateYears]).isLeapYear();

      if (isLeapYear) {
        ++leapYears
      }
    };

    const enteredDateYears = enteredDate.diff(currentDate, 'years');
    const enteredDateDays = enteredDate.diff(currentDate, 'days') - (enteredDateYears * 365 + leapYears);
    const enteredDateHours = Math.round(enteredDate.diff(currentDate, 'hours') % 24);
    const countdownOutputContent = `${textPhenomen.value} через: ${enteredDateYears} ${selectionDeclension(enteredDateYears, ['год', 'года', 'лет'])}, ${enteredDateDays} ${selectionDeclension(enteredDateDays, ['день', 'дня', 'дней'])}, ${enteredDateHours} ${selectionDeclension(enteredDateHours, ['час', 'часа', 'часов'])}`;

    countdownOutput.textContent = countdownOutputContent;
  }
};