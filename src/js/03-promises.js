import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayInput = parseInt(
  document.querySelector("input[name='delay']").value
);
const stepInput = parseInt(document.querySelector("input[name='step']").value);
const amountInput = parseInt(
  document.querySelector("input[name='amount']").value
);

function createPromise(position, delay) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    new Promise(resolve, reject);
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

for (const i = 0; i < amountInput; i += 1) {
  createPromise(2, 1500)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
