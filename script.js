const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calcula1');
const input2 = document.querySelector('#calcula2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')
const form = document.querySelector('#form')

form.addEventListener('submit', sumInputValues);

function sumInputValues(event) {
  console.log({ event });
  event.preventDefault();
  sumInputs = Number(input1.value) + Number(input2.value);
  pResult.innerText = 'Resultado: ' + sumInputs;
}