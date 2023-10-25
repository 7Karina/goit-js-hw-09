import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', async function (event) {
  event.preventDefault();

  const delayInput = parseInt(
    document.querySelector("input[name='delay']").value
  );
  const stepInput = parseInt(
    document.querySelector("input[name='step']").value
  );
  const amountInput = parseInt(
    document.querySelector("input[name='amount']").value
  );

  if (isNaN(delayInput) || isNaN(stepInput) || isNaN(amountInput)) {
    Notiflix.Notify.failure('Please fill in all fields with valid numbers');
    return;
  }

  for (let i = 1; i <= amountInput; i++) {
    const delay = delayInput + (i - 1) * stepInput;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

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
