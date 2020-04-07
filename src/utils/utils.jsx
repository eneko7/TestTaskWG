/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable quote-props */

export const games = {
  worldOfTanks: 'World Of Tanks',
  worldOfWarplanes: 'World Of Warplanes',
  worldOfWarships: 'World Of Warships',
};

export const selectWidgetFilter = {
  all: 'Без фильтра',
  '50': 'Номер больше 50',
  '100': 'Номер больше 100',
  '200': 'Номер больше 200',
};

export const objectOfElements = () => {
  const resObj = {};
  for (let i = 1; i <= 300; i++) {
    resObj[`Элемент ${i}`] = false;
  }
  return resObj;
};

export const filter = (list, searchValue, filterValue) => {
  const searchedObj = {};
  if (filterValue === 'all') {
    for (const [key, value] of Object.entries(list)) {
      if (key.indexOf(searchValue) !== -1) {
        searchedObj[key] = value;
      }
    }
  } else {
    for (const [key, value] of Object.entries(list)) {
      if (key.indexOf(searchValue) !== -1 && Number(key.replace(/\D+/g, '')) > +filterValue) {
        searchedObj[key] = value;
      }
    }
  }
  return searchedObj;
};
