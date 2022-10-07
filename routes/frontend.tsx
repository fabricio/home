import { HeadComponent } from '../components/Head.tsx'
import { Footer } from '../components/Footer.tsx'
import Qrcode from '../components/frontendmentor/components/qrcode.tsx'


export default function Frontend(){
  return(
    <>
      <HeadComponent />
        {/* <menu>
          <li><a href="/frontendmentor">Frontend Mentor Challenge</a></li>
        </menu> */}
        <body>
          <Qrcode />
        </body>
      <Footer />
    </>
  );
}
