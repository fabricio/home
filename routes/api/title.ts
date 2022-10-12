import { TITLES } from './locale.ts';

export const {pt, en} = TITLES;
export const random = (val:Array<string>) => Math.floor(Math.random() * val.length);
export const checkLocale = ():string => Intl.DateTimeFormat().resolvedOptions().locale;

// export const Title = () => {

//   if (checkLocale() === 'pt-BR') {
//     const randomIndex = Math.floor(Math.random() * pt.length);
//     return pt[randomIndex];
//   }
//   else{
//     const randomIndex = Math.floor(Math.random() * en.length);
//     return en[randomIndex];
//   }
// };
