import { PageProps } from "$fresh/server.ts";
import { HeadComponent } from '../components/Head.tsx';
// import { Footer } from '../components/Footer.tsx';


const ACTION = "https://public.herotofu.com/v1/948b9530-18e0-11ed-98e8-53e0970ab51c";

export default function Contact() {
  return(
    <>
      <HeadComponent />
      <body class="bg-bg font-sans text-black">
        <main class="p-4 mx-auto max-w-screen-sm flex justify-center items-center h-screen flex-wrap flex-col">
          <div class="w-full  mx-auto">
            <div class="p-6 border border-black-300 sm:rounded-md">
              <form method="POST" action={ACTION}>
                <label class="block mb-6">
                  <span class="text-black-700">Your name</span>
                  <input type="text" name="name" class="p-2 block w-full mt-1 border-black-300 rounded-md shadow-sm focus:border-white-300" placeholder="Foo Bar"/>
                </label>
                <label class="block mb-6">
                  <span class="text-black-700">Email address</span>
                  <input name="email"type="email"class="p-2 block w-full mt-1 border-black-300 rounded-md shadow-sm focus:border-white-300 focus:ring focus:ring-white-200 focus:ring-opacity-50"placeholder="foo@bar.com"required />
                </label>
                <label class="block mb-6">
                  <span class="text-black-700">Message</span>
                  <textarea name="message" class="p-2 block w-full mt-1 border-black-300 rounded-md shadow-sm focus:border-white-300 focus:ring focus:ring-white-200 focus:ring-opacity-50" rows="3" placeholder="Tell me who I can help you..." ></textarea>
                </label>
                <div class="mb-6">
                  <button type="submit"class="font-noto h-10 px-5 text-white bg-black rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-black-100">
                    Contact Me
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <Footer /> */}

        </main>
      </body>

    </>
  );

  // <div class="text(4xl black-600)">You are in {props.route}</div>;
}
