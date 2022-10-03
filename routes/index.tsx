
import { Title } from './api/title.ts'
import { Links } from './api/links.ts';
import { HeadComponent } from '../components/Head.tsx'
import { Footer } from '../components/Footer.tsx'


// const titles = ['Developer', 'UX', 'No one', 'Teacher', 'Human', 'Dreamer'];
//  const rand = () => titles[Math.random() * titles.length | 0];
const name ='Fabrício';
const title = Title;
const links = Links

export default function Home() {

  return (
    <>
      <HeadComponent />
      <body class="bg-bg font-sans text-black">
        <main class="p-4 mx-auto max-w-screen-sm flex justify-center items-center h-screen flex-wrap flex-col">
          <div class=" w-full">
            <span class="text-3xl">Hi, I'm</span>
            <h1 class="font-bold text-5xl"><a href="/contact" class="">{name}</a></h1>
            <span class="text-2xl">Developer and {title().toLowerCase()}.</span>
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
