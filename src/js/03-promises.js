import Notiflix from 'notiflix';

// Notiflix.Notify.warning('Please choose a date in the future');

const refs = {
  form: document.querySelector('form.form'),
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]')
}

refs.form.addEventListener('submit', onFormSubmit);


//     Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) 
// стільки разів, скільки ввели в поле amount.Під час кожного виклику передай їй номер промісу(position),
// що створюється, і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).

// function onFormInput() {
//   console.log(+refs.delayInput.value);
//   console.log(refs.stepInput.value);
//   console.log(refs.amountInput.value);
// }

function onFormSubmit(evt) {
  evt.preventDefault()

  // inputs value transform to number
  let firstDelayToNum = +refs.delayInput.value;
  let stepDelayToNum = +refs.stepInput.value;
  let amountToNum = +refs.amountInput.value;

  console.log(firstDelayToNum);
  console.log(stepDelayToNum);
  console.log(amountToNum);

  for (let i = 1; i <= amountToNum; i += 1) {

    createPromise(i, firstDelayToNum)
      .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
      .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    firstDelayToNum += stepDelayToNum;
  }

  refs.form.reset()
}


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      }
      else {
        reject({position, delay})
      }
    }, delay)
  })
  
}





// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });