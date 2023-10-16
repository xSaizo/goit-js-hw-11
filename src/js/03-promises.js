import Notiflix from 'notiflix';
import throttle from 'lodash.throttle';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', async function (event) {
  event.preventDefault(); 

  const delay = parseInt(document.querySelector('[name="delay"]').value, 10);
  const step = parseInt(document.querySelector('[name="step"]').value, 10);
  const amount = parseInt(document.querySelector('[name="amount"]').value, 10);

  for (let i = 0; i < amount; i++) {
    const currentDelay = delay + i * step;
    const position = i + 1;

    try {
      const result = await createPromise(position, currentDelay);
      Notiflix.Notify.success(`Fulfilled promise ${result.position} in ${result.delay}ms`)
      
    } catch (error) {
      Notiflix.Notify.failure(`Rejected promise ${error.position} in ${error.delay}ms`);

      
    }
  }
});