const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input
});

h1.innerHTML = 'Patito <br> feo';
h1.innerText = 'Patito <br> feo';
console.log(h1.getAttribute('pantalla'));
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

//h1.classList.add('rojo');
//h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');

input.value = '456';
const img = document.createElement('img');
img.setAttribute('src', 'https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg')
console.log(img);
pid.replaceChildren(img);
console.log(pid.value);