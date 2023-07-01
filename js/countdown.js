import moment from "moment/moment";
import { countodwnOutput, formDate, textEvent } from "./view.js";

function selectionDeclension(n, text_forms) {  
    const moreHundreds = Math.abs(n) % 100; 
    const lessHundreds = moreHundreds % 10;
    if (moreHundreds > 10 && moreHundreds < 20) { return text_forms[2]; }
    if (lessHundreds > 1 && lessHundreds < 5) { return text_forms[1]; }
    if (lessHundreds == 1) { return text_forms[0]; }
    return text_forms[2];
}

export function countdown() {
  const isValueFormDate = formDate.value === '';
  const isValueTextEvent = textEvent.value === '';

  if (isValueFormDate || isValueTextEvent) {
    window.modaErrorlEmptyFields.show();
  }else {
    const enteredDate = moment(formDate.value, 'DD-MM-YYYY');
    const currentDate = moment();
    const isEnteredDate = moment(enteredDate) < moment(currentDate)

    localStorage.setItem('enteredDate', JSON.stringify(formDate.value));
    localStorage.setItem('textEvent', JSON.stringify(textEvent.value));

    if (isEnteredDate) {
      window.modalErrorDatePast.show();
      return;
    };

    const isLeapYear = moment(currentDate).isLeapYear();
    const enteredDateYears = enteredDate.diff(currentDate, 'years');
    let enteredDateDays = '';
    if (isLeapYear) {
      enteredDateDays = enteredDate.diff(currentDate, 'days') - (enteredDateYears * 366);
    }else {
      enteredDateDays = enteredDate.diff(currentDate, 'days') - (enteredDateYears * 365);
    }
    const enteredDateHours = Math.round(enteredDate.diff(currentDate, 'hours') % 24);

    countodwnOutput.textContent = `${textEvent.value} через: ${enteredDateYears} ${selectionDeclension(enteredDateYears, ['год', 'года', 'лет'])}, ${enteredDateDays} ${selectionDeclension(enteredDateDays, ['день', 'дня', 'дней'])}, ${enteredDateHours} ${selectionDeclension(enteredDateHours, ['час', 'часа', 'часов'])}`;
  }
};