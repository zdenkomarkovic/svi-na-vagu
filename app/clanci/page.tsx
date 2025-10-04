import React from "react";

const articles = [
  {
    title: "Kako se zdravo hraniti na poslu",
    url: "https://www.doktok.rs/portal/kako-se-zdravo-hraniti-na-poslu",
    description:
      "Praktični saveti za zdravu ishranu tokom radnog dana, kako biste sačuvali energiju i produktivnost na poslu.",
    source: "DokTok.rs",
    image: "/logo-doktok.jpg",
  },
  {
    title: "Detox organizma nakon praznika",
    url: "https://www.doktok.rs/portal/detox-organizma-nakon-praznika",
    description:
      "Saznajte kako da očistite organizam i povratite vitalnost nakon prazničnog prejedanja.",
    source: "DokTok.rs",
    image: "/logo-doktok.jpg",
  },
  {
    title: "Koliko vode treba unositi dnevno",
    url: "https://www.doktok.rs/portal/koliko-vode-treba-unositi-dnevno",
    description:
      "Koliko je zaista potrebno piti vode svakog dana i kako pravilno hidrirati telo?",
    source: "DokTok.rs",
    image: "/logo-doktok.jpg",
  },
  {
    title: "Važnost meda u ishrani",
    url: "https://www.doktok.rs/portal/vaznost-meda-u-ishrani",
    description:
      "Otkrijte zbog čega je med dragocen deo zdrave ishrane i kako ga pravilno koristiti.",
    source: "DokTok.rs",
    image: "/logo-doktok.jpg",
  },
  {
    title: "Kako organska hrana utiče na razvoj deteta?",
    url: "https://bebac.com/kako-organska-hrana-utice-na-razvoj-deteta/",
    description:
      "Saznajte zašto je organska hrana važna za zdrav razvoj deteta i kako utiče na zdravlje od najranijeg uzrasta.",
    source: "Bebac.com",
    image: "/logo-bebac.png",
  },
  {
    title: "Da li je pomfrit baš toliko loš?",
    url: "https://bebac.com/da-li-je-pomfrit-bas-toliko-los/",
    description:
      "Analiziramo koliko je pomfrit zaista štetan za decu i odrasle i kako ga konzumirati na zdrav način.",
    source: "Bebac.com",
    image: "/logo-bebac.png",
  },
  {
    title:
      "OVE TRI NAMIRNICE JEDU NAJDUGOVEČNIJI LJUDI Za jednu svi misle da nije zdrava, a nutricionistkinja kaže da deluje poput lekova",
    url: "https://www.alo.rs/zena/zdravlje/695725/ove-tri-namirnice-jedu-najdugovecniji-ljudi-za-jednu-svi-misle-da-nije-zdrava-a-nutricionistkinja-kaze-da-deluje-poput-lekova/vest",
    description:
      "Saznajte koje tri namirnice su deo ishrane najdugovečnijih ljudi na svetu i zašto nutricionistkinja tvrdi da su zdrave, iako mnogi misle suprotno.",
    source: "Alo.rs",
    image: "/logo-alo.webp",
  },
  {
    title:
      "STIGLO NAM JE VOĆE ZA KOJE NISTE ČULI Velika ponuda neobičnih i egzotičnih plodova u prodavnicama",
    url: "https://www.blic.rs/biznis/stiglo-nam-je-voce-za-koje-niste-culi-velika-ponuda-neobicnih-i-egzoticnih-plodova-u/dqsd2ld",
    description:
      "Saznajte više o egzotičnim i neobičnim vrstama voća koje su se pojavile na našem tržištu i kako ih pravilno konzumirati.",
    source: "Blic.rs",
    image: "/logo-blic.webp",
  },
  {
    title: "Šta je VITAMIN F i zbog čega nam JE POTREBAN?",
    url: "https://www.k1info.rs/zdravlje/vesti/12961/sta-je-vitamin-f-i-zbog-cega-nam-je-potreban/vest",
    description:
      "Saznajte šta je vitamin F, zašto je važan za organizam i u kojim namirnicama ga možete pronaći.",
    source: "K1info.rs",
    image: "/logo-k1.png",
  },
  {
    title:
      "NIKO NE PERE VOĆE KAKO TREBA: Nutricionistkinja otkriva pravi način - jedino tako ne rizikujete!",
    url: "https://srecna.republika.rs/dom-i-kuhinja/tetka-saveta/37032/kako-treba-da-peremo-voce",
    description:
      "Saznajte kako pravilno prati voće i izbeći rizik od pesticida i bakterija, prema savetu nutricionistkinje Milke Raičević.",
    source: "Srećna Republika",
    image: "/logo-srecna.png",
  },
  {
    title:
      "NUTRICIONISTA RAIČEVIĆ OTKRIVA ŠTA SLANINA ČINI NAŠEM TELU: Srbi ne znaju jednu važnu stvar - kada su na dijeti konzumiraju jednu drugu namirnicu koja diže holesterol u nebesa!",
    url: "https://srecna.republika.rs/zdravlje/odrasli/33196/slanina-da-li-je-zdrava-nutricionista-raicevic",
    description:
      "Saznajte da li je slanina zaista štetna ili može biti deo zdrave ishrane, prema savetima nutricionistkinje Milke Raičević.",
    source: "Srećna Republika",
    image: "/logo-srecna.png",
  },
  {
    title:
      "Koju hranu posle praznika treba prvo eliminisati iz frižidera: Nutricionista Raičević kaže ako nismo pojeli da bacimo",
    url: "https://stil.kurir.rs/lepi-zdravi/229956/sta-treba-uraditi-sa-hranom-posle-praznika",
    description:
      "Saznajte šta nutricionistkinja Milka Raičević savetuje da uradite sa ostacima hrane posle praznika i kako da sačuvate zdravlje.",
    source: "Stil Kurir",
    image: "/logo-stil.png",
  },
  {
    title:
      "Nikako soda bikarbona: Spas za želudac su samo 2 jeftine namirnice, tvrdi ljekar",
    url: "https://bosnainfo.ba/nikako-soda-bikarbona-spas-za-zeludac-su-samo-2-jeftine-namirnice-tvrdi-ljekar/?ref=aklamator&ak=c_J-Wez4&utm_source=aklamator_com&utm_medium=referral&utm_campaign=Nikako_soda_bikarbona__Spas_za_zelu",
    description:
      "Saznajte koje dve namirnice lekari preporučuju kao najbolji spas za želudac, umesto sode bikarbone.",
    source: "Bosnainfo.ba",
    image: "/logo-bosna.png",
  },
  {
    title:
      "Da li pirinač može da vas otruje ako ga jedan dan ostavite van frižidera: Evo šta kažu stručnjaci",
    url: "https://ona.telegraf.rs/amp/fitnes-i-zdravlje/3893852-da-li-pirinac-moze-da-vas-otruje-ako-ga-jedan-dan-ostavite-van-frizidera-evo-sta-kazu-strucnjaci",
    description:
      "Saznajte da li je pirinač bezbedan za jelo nakon što je stajao van frižidera i šta savetuju nutricionisti.",
    source: "Ona.rs",
    image: "/logo-ona.png",
  },
  {
    title:
      "Zaboravite na proteinske čokoladice, novi trend među sportistima je - majčino mleko",
    url: "https://rs.bloombergadria.com/politika/opste/87596/novi-trend-majcino-mleko-za-trening/news",
    description:
      "Iza ovog trenda ipak možda leži dublji problem i rizik po zdravlje",
    source: "Ona.rs",
    image: "/logo-ona.png",
  },
];

const ClanciPage = () => {
  return (
    <div className="container mx-auto px-2 md:px-4 py-24">
      <h1 className="text-center mb-10">Članci</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-xl bg-white/80 shadow flex flex-col justify-between"
          >
            <div>
              <h2 className="mb-1 text-xl">{article.title}</h2>
              <p className="text-sm">{article.description}</p>
            </div>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-3 py-1 bg-primary text-white rounded-lg hover:brightness-90 transition text-sm"
            >
              Pročitaj više
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClanciPage;
