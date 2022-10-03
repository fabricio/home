import { Head } from "$fresh/runtime.ts";

const TITLE = "Fabrício Soares";
const DESCRIPTION = "Just a guy who knows things like Frontend and UX";

export function HeadComponent(){
  return(
    <>
      <Head>
        <title>{ TITLE }</title>
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
      </Head>
    </>
  )
}
