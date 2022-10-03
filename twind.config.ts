import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme:{
    colors:{
      black: colors.black,
      white: colors.white,
      'bg': '#E4E3DE',

    },

    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif',
        noto: 'Noto Sans'

      }
    }
  },
  preflight:{
    // Import external stylesheet
    '@import': `url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&family=Roboto&display=swap')`

  },
} as Options;
