import { TITLES } from './locale.ts';

export const checkLocale = ():string => Intl.DateTimeFormat().resolvedOptions().locale;

export const Title = () => {
  if (checkLocale() === 'pt-BR') {
    const randomIndex = Math.floor(Math.random() * TITLES['pt-BR'].length);
    const title = TITLES['pt-BR'][randomIndex];
    return title;
  }
  else{
    const randomIndex = Math.floor(Math.random() * TITLES['en-US'].length);
    const title = TITLES['en-US'][randomIndex];
    return title;

  }
};
