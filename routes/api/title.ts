
const TITLES = ['Husband', 'UX', 'Writer', 'Teacher', 'Father', 'Dreamer', 'Manager'];
// const TITLES = ['UX', 'Teacher', 'Manager'];


export const Title = () => {
  const randomIndex = Math.floor(Math.random() * TITLES.length);
  const title = TITLES[randomIndex];
  return title;
};
