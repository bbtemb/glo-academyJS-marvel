import { getData } from './helpers';

const movieFilter = () => {
  const select = document.querySelector('#select');
  const renderSelect = (data) => {
    const movieList = [];
    data.forEach((card) => {
      if (card.movies) {
        card.movies.forEach((movie) => {
          if (!movieList.includes(movie)) {
            movieList.push(movie);
          }
        });
      }
    });
    movieList.sort();
    movieList.forEach((movie) => {
      const option = document.createElement('option');
      option.value = movie;
      option.textContent = movie;
      select.append(option);
    });
  };

  const filter = () => {
    const selectValue = select.value;
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      if (selectValue === '0') {
        card.style.display = 'block';
        return;
      }
      if (card.textContent.includes(selectValue)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  };

  getData().then((data) => {
    renderSelect(data);
    filter();
    select.addEventListener('change', filter);
  });
};

export default movieFilter;
