import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cardlist from "@/components/Cardlist";
import Cards2 from "@/components/Cards2";
import CardWithImage from "@/components/CardWithImage";
import CTA from "@/components/CTA";
import HeroOneImg from "@/components/HeroOneImg";
import Manifestacije from "@/components/Manifestacije";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import PravilnaIshrana from "@/components/PravilnaIshrana";
import Statistika from "@/components/Statistika";
import VideoCard from "@/components/VideoCard";
import { cards2Data, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />
      <About2 />
      <Cards2 title={"Naša misija"} data={cards2Data} text={cards2DataText} />
      <Manifestacije />
      <PravilnaIshrana />
      <CTA />
      <Statistika />
      <Cardlist />
      <PozoviteNasOdmah />
      <CardWithImage />
      <BackgroundImage />
      <VideoCard />
    </div>
  );
}
