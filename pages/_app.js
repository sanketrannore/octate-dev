import Layout from "@/src/layout/layout";
import { persistor, store } from "@/src/store/store";
import "@/styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        </Head>
        <Layout>
          <Component session={session} {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
