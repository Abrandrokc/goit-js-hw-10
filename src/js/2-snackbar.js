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
const sumbit = document.querySelector('button[type="submit"]');
const input = document.querySelector('[name="delay"]');


   sumbit.addEventListener('click', function(event) {
     event.preventDefault(); 
      const delay = parseInt(input.value);
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
    