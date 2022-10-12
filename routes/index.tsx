
import { pt, en, random, checkLocale } from './api/title.ts'
import { HeadComponent } from '../components/Head.tsx'
import { Footer } from '../components/Footer.tsx'

const name ='Fabrício';
// const title = Title;
// {title()}
const locale = checkLocale();

export default function Home() {
  return (
    <>
      <HeadComponent />
      {/* {locale} */}
      <body class="bg-bg font-sans text-black">
        <main class="p-4 mx-auto max-w-screen-sm flex justify-center items-center h-screen flex-wrap flex-col">
          <div class=" w-full">
            <h1 class="font-bold text-5xl"><a href="/contact" class=""><span class="">{name}</span></a></h1>
            <span class="text-2xl"><a href="/frontend" class="">Front-end</a>, UX {locale === 'pt-BR'? 'e': 'and'} {locale === 'pt-BR'? pt[random(pt)] : en[random(en)]}.</span>
          </div>
          <ul class="w-full mt-5 font-noto">
            <li class="text-xs"><a href="http://github.com/fabricio/" class="text-base font-medium">/fabricio</a> on github</li>
            <li class="text-xs"><a href="http://twitter.com/fabricio/" class="text-base font-medium">@fabricio</a> on twitter</li>
          </ul>
          <Footer />
        </main>
      </body>
    </>
  );
}
