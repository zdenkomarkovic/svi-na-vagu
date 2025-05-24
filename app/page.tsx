import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cardlist from "@/components/Cardlist";
import Cards2 from "@/components/Cards2";
import CardWithImage from "@/components/CardWithImage";
import HeroOneImg from "@/components/HeroOneImg";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import Statistika from "@/components/Statistika";
import VideoCard from "@/components/VideoCard";
import { cards2Data, cards2DataText } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <HeroOneImg />

      <About2 />
      <Cards2
        title={"Naša misija"}
        data={cards2Data}
        text={cards2DataText}
        cols={4}
      />
      <PozoviteNasOdmah />
      <Statistika />

      <Cardlist />
      <BackgroundImage />
      <VideoCard />
      <Cards2
        title={"Naša misija"}
        data={cards2Data}
        text={cards2DataText}
        cols={4}
      />
      <CardWithImage />
    </div>
  );
}
