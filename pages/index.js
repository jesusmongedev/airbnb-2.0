import Head from "next/head";
import Booking from "../Components/Booking";
import Header from "../Components/Header";
import HeroImage from "../Components/HeroImage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EuroBuilding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://i.imgur.com/v8S1WPT.png" />
      </Head>
      <Header />
      <HeroImage />
      {/* HeroImg */}
      <Booking />
    </div>
  );
}
