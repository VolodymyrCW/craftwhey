export const createCategoryRus = (category) => {
  switch (category) {
    case 'Гранола':
      return 'granola';
    case 'Протеїн':
      return 'protein';
    case 'Вафлі':
      return 'waffles';
    default:
      return 'cookie';
  }
};
