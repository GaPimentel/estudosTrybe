function funAleatorios(e) {
  const geraEfeito = ['rotate', 'translate-up', 'scale-up'];
  const efeitoGerado = Math.floor(Math.random() * geraEfeito.length);
  const classEfeito = geraEfeito[efeitoGerado];
  e.target.classList.add(classEfeito);
  e.target.removeEventListener('mouseover', funAleatorios);
}

function imgAleatoria() {
  const geraCard = ['cinco-de-ouros.png', 'nove-de-espadas.png', 
  'quatro-de-paus.png', 'seis-de-copas.png', 'sete-de-espadas.png',
  'sete-de-paus.png', 'tres-de-ouros.png'];
  const cardGerado = Math.floor(Math.random() * geraCard.length);
  return geraCard[cardGerado];
}

function funAdicionar() {
  const boxCards = document.querySelector('.box-cards');
  const cardBox = document.createElement('div');
  cardBox.classList.add('box-card');
  boxCards.appendChild(cardBox);

  const card = document.createElement('img')
  card.src = 'img/'.concat(imgAleatoria());
  card.classList.add('cards');
  cardBox.appendChild(card);

  card.addEventListener('mouseover', funAleatorios);
}
document.querySelector('.carta').addEventListener('click', funAdicionar);
