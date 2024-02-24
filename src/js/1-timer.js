import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const button = document.querySelector("[data-start]");
const input = document.querySelector("#datetime-picker");
const days = document.querySelector("[data-days]");
const hour = document.querySelector("[data-hours]");
const minute = document.querySelector("[data-minutes]");
const second = document.querySelector("[data-seconds]");
button.disabled = true;

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate.getTime() < Date.now()) {
      iziToast.show({
        message: 'Please choose a date in the future'
      });
    } else {
      button.disabled = false;
    }
  }
};

const userChoice = flatpickr("#datetime-picker", options);

button.addEventListener("click", () => {
  button.disabled = true;
  input.disabled = true;
    
  const timeClock = setInterval(() => {
    const delta = userSelectedDate.getTime() - Date.now();
    const time = convertMs(delta);
    days.textContent = addLeadingZero(time.days);
    hour.textContent = addLeadingZero(time.hours);
    minute.textContent = addLeadingZero(time.minutes);
    second.textContent = addLeadingZero(time.seconds);

    if (delta <= 0) {
      clearInterval(timeClock);
      button.disabled = false;
      input.disabled = false;
    }
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
   return value < 0 ? '00' : value < 10 ? `0${value}` : value;
}
