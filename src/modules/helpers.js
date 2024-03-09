export const getData = async () => {
  const response = await fetch('./db/dbHeroes.json');
  const cardsArr = await response.json();
  return cardsArr;
};
