<div id="container">
  <p>Este é um parágrafo</p>
</div>

const paragraph = document.querySelector('p');
const parentElement = paragraph.parentNode;

console.log(parentElement.id); // Saída: "container"
