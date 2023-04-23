import "@/styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
        <Component session={session} {...pageProps} />
    </Fragment>
  );
}
