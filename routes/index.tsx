
import { Title, checkLocale } from './api/title.ts'
import { Links } from './api/links.ts';
import { HeadComponent } from '../components/Head.tsx'
import { Footer } from '../components/Footer.tsx'


// const titles = ['Developer', 'UX', 'No one', 'Teacher', 'Human', 'Dreamer'];
//  const rand = () => titles[Math.random() * titles.length | 0];
const name ='Fabrício';
const title = Title;
const links = Links

const locale = checkLocale;

const language:string = navigator.language;


export default function Home() {

  return (
    <>
      <HeadComponent />
      {/* {locale()} */}
      {/* {locale() === 'en-US'? 'Fuck': 'Puts'} */}
      <body class="bg-bg font-sans text-black">
        <main class="p-4 mx-auto max-w-screen-sm flex justify-center items-center h-screen flex-wrap flex-col">
          <div class=" w-full">
            <h1 class="font-bold text-5xl"><a href="/contact" class=""><span class="">{name}</span></a></h1>
            <span class="text-2xl">Front-end, UX {locale() === 'pt-BR'? 'e': 'and'} {title()}.</span>
          </div>
          <ul class="w-full mt-5 font-noto">
            {/* {links.map(link => <li class="text-xs"><a href={link[1]} class="text-lg font-medium">fabricio</a> on {link[0]}</li>)} */}
            <li class="text-xs"><a href="http://github.com/fabricio/" class="text-base font-medium">/fabricio</a> on github</li>
            <li class="text-xs"><a href="http://twitter.com/fabricio/" class="text-base font-medium">@fabricio</a> on twitter</li>
          </ul>
          <Footer />
        </main>
      </body>
    </>

  );
}
