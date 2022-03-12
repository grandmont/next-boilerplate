import type { NextPage } from "next";
import Head from "next/head";

import GenericComponent from "components/elements/GenericComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Grandmont</title>
        <meta name="description" content="Grandmont" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GenericComponent />
    </div>
  );
};

export default Home;
