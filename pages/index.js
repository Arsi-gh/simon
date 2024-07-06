import Dorehami from "@/components/ui/dorehami";
import MansionParts from "@/components/swiper/mansionParts/mansionParts";
import SpecialItems from "@/components/ui/specialItems";
import Story from "@/components/ui/story";
import WelcomeSection from "@/components/ui/welcomeSection";
import SpecialEvents from "@/components/ui/specialEvents";
import SpecialGuests from "@/components/ui/specialGuests";
import MainPageGallary from "@/components/swiper/indexGallary/mainPageGallary";
import Comments from "@/components/ui/comments";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>عمارت سیمون</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="meta"/>
      <meta name="description" content="عمارت سیمون"></meta>
    </Head>
    <WelcomeSection/>
    <Story/>
    <SpecialItems/>
    <Dorehami/>
    <MansionParts/>
    <SpecialEvents/>
    <SpecialGuests/>
    <MainPageGallary/>
    <Comments/>
    </>
  )
}
