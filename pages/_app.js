import Head from 'next/head';
import Script from 'next/script';

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Akmal Syarifuddin | Junior Fullstack Developer</title>
        <meta name="description" content="Hello! My name is Akmal Syarifuddin. I'm a Junior Fullstack
        Developer, and Informatic System Student" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Akmal Syarifuddin" />
        <meta name="creator" content="Akmal Syarifuddin" />
        <meta name="keywords" content="Akmal Syarifuddin,Fullstack Developer, Backend Developer, Frontend Developer, Mobile Developer, Developer, Programmer" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </Head>
      <Component {...pageProps} />
      <Script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossOrigin
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossOrigin
      ></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin
      ></Script>
    </>
  )
}

export default MyApp
