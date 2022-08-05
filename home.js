// Muda o plano de fundo ao clicar no botão

const background = document.getElementById("button");
const background_color = document.getElementById("div");
const text = document.getElementById('h1');
const button = document.getElementById('button');

background.addEventListener('click',function modifyBackground() {
  const classButton = button.classList.toggle("true");

  if (classButton) {
    background_color.style.backgroundColor = 'black';
    button.innerHTML = 'Light Mode';
    text.style.color = 'white';
    text.innerHTML = 'Dark Mode ON';
  } else {
    background_color.style.backgroundColor = 'white';
    button.innerHTML = 'Dark Mode';
    text.style.color = 'black';
    text.innerHTML = 'Light Mode ON'
  }
})





