import "@styles/globals.css";
import Head from 'next/head'; 

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptverse",
  description: "Explore & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" /> 
        <html lang="en" />
      </Head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </>
  );
};

export default RootLayout;
