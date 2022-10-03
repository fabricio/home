
const TITLES = ['Camila\'s Husband', 'writer', 'teacher', 'Izabel\'s Father', 'student', 'manager'];
// const TITLES = ['UX', 'Teacher', 'Manager'];


export const Title = () => {
  const randomIndex = Math.floor(Math.random() * TITLES.length);
  const title = TITLES[randomIndex];
  return title;
};
