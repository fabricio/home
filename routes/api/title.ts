// import { parse } from "https://deno.land/std/flags/mod.ts";
// import i18next from 'https://deno.land/x/i18next/index.js'

import { TITLES } from './locale.ts';

export const checkLocale = () => {
  const _locale = Intl.DateTimeFormat().resolvedOptions().locale;
    return _locale;
}

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
