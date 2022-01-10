import HeroBox from "../components/hero";
import Head from "next/head";

export default function Lander(props) {
  return (
    <>
      <Head>
        <title>Forage Gourmet Platter Co</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBox />
    </>
  );
}
