import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
       
     
    } else {
      startButton.disabled = false;
    }
  },
};

const datetimePicker = document.getElementById("datetime-picker");
flatpickr(datetimePicker, options);

let timerInterval = null;
let countdownDate = null;
let timeDifference = 0;

const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

function startTimer() {
  timerInterval = setInterval(function () {
    if (timeDifference <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
    } else {
      timeDifference -= 1000;
      const timeRemaining = convertMs(timeDifference);
      daysElement.textContent = addLeadingZero(timeRemaining.days);
      hoursElement.textContent = addLeadingZero(timeRemaining.hours);
      minutesElement.textContent = addLeadingZero(timeRemaining.minutes);
      secondsElement.textContent = addLeadingZero(timeRemaining.seconds);
    }
  }, 1000);
}

function setTimer() {
  if (!timerInterval) {
    countdownDate = flatpickr.parseDate(datetimePicker.value, "Y-m-d H:i");
    const currentDate = new Date();
    timeDifference = countdownDate - currentDate;
    startTimer();
  }
}

startButton.addEventListener('click', function () {
  setTimer();
  localStorage.setItem("countdownDate", countdownDate.toISOString());
});

const savedCountdownDate = localStorage.getItem("countdownDate");
if (savedCountdownDate) {
  countdownDate = new Date(savedCountdownDate);
  setTimer();
  startButton.disabled = false;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}