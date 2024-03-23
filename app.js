const btnAdicionar = document.getElementById('btnAdicionar');
const btnListar = document.getElementById('btnListar');
const btnFiltrar = document.getElementById('btnFiltrar');
const outLista = document.getElementById('outLista');

let carros = [];

btnAdicionar.addEventListener('click', () => {
  const modelo = document.getElementById('inModelo').value;
  const preco = document.getElementById('inPreco').value;

  if (modelo && preco) {
    carros.push({ modelo, preco });
    displayCarros();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});

btnListar.addEventListener('click', () => {
  displayCarros();
});

btnFiltrar.addEventListener('click', () => {
  const maxPrice = prompt('Digite o preço máximo:');
  const filteredCars = carros.filter(carro => carro.preco <= maxPrice);
  outLista.textContent = JSON.stringify(filteredCars, null, 2);
});

function displayCarros() {
  outLista.textContent = '';
  carros.forEach(carro => {
    outLista.textContent += `Modelo: ${carro.modelo}, Preço: R$${carro.preco}\n`;
  });
}
