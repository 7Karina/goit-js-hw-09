import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
// const timer = document.querySelector('.timer');
const start = document.querySelector('button[data-start]');
const daysEl = document.querySelector('.value[data-days]');
const hoursEl = document.querySelector('.value[data-hours]');
const minutesEl = document.querySelector('.value[data-minutes]');
const secondsEl = document.querySelector('.value[data-seconds]');

start.disabled = true;
let timeDedline;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] > options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    start.disabled = false;
    timeDedline = selectedDates[0];
  },
};

flatpickr(inputEl, options);

start.addEventListener('click', startClock);

function startClock() {
  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = timeDedline - currentTime;
    const { days, hours, minutes, seconds } = convertMs(diff);

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);

    if (diff <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
