import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else if (state === 'rejected') {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });
}

const form = document.querySelector('.form');
const delayInput = document.querySelector('[name="delay"]');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const delay = parseInt(delayInput.value);
  const state = document.querySelector('input[name="state"]:checked').value;
  
  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
