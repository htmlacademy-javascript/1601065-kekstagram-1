const imgFilters = document.querySelector('.img-filters');

const showFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

export {showFilters};
