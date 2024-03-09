import { getData } from './helpers';

const updateCards = () => {
  const cards = document.querySelector('.cards');

  const renderCards = (data) => {
    const arr = data;
    arr.forEach((card) => {
      const cardEl = document.createElement('div');
      cardEl.classList.add('card');
      cardEl.innerHTML = `<h2 class="card-title">${card.name}</h2>
      <img src="db/${card.photo}" alt="${card.name}"/>
      <div class="card-desc">
        <p>Name: ${card.name}</p>
        <p>Real Name: ${card.realName}</p>
        <p>Species: ${card.species}</p>
        <p>Citizenship: ${card.citizenship}</p>
        <p>Gender: ${card.gender}</p>
        <p>BirthDay: ${card.birthDay}</p>
        <p>DeathDay: ${card.deathDay}</p>
        <p>Status: ${card.status}</p>
        <p>Actors: ${card.actors}</p>
        <p>Movies: ${card.movies}</p>
      </div>`;

      const pList = cardEl.querySelectorAll('p');
      pList.forEach((p) => {
        if (p.textContent.includes('undefined')) {
          p.style.display = 'none';
        }
      });
      cards.append(cardEl);
    });
  };

  getData().then((data) => {
    renderCards(data);
  });
};

export default updateCards;
