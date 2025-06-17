import React from "react";
import ImageCarusel from "./ImageCarusel";

const Manifestacije = () => {
  return (
    <div className="overflow-hidden">
      <div className="container mb-6 px-2 md:px-4 mx-auto flex flex-col gap-2  items-center">
        <h2 className="text-center py-6">Manifestacije i projekti</h2>
        <p className=" first-letter:pl-6">
          <span className="font-bold text-primary">Projekat</span> “
          <span className="font-bold text-primary">Svi na vagu</span>” pokrenut
          je 2013. godine na Jesenjem festivalu zdravlja u Nišu. Ideja je
          nastala iz potrebe da se ukaže na sve prisutniji problem gojaznosti
          kod građana svih starosnih dobi – i da se kroz preventivne mere i
          edukaciju ponudi konkretna pomoć zajednici.
        </p>
        <p className=" first-letter:pl-6">
          Od tada do danas, kroz projekat je prošlo više hiljada ljudi – mereni
          su, savetovani i motivisani da preduzmu korake ka zdravijem životu. Do
          sada smo organizovali 41 manifestaciju i izvagali preko 14.000
          građana, čime je “Svi na vagu” postao jedan od najaktivnijih programa
          ovog tipa u regionu. Udruženje je čak i kandidovalo ovaj projekat za
          Ginisovu knjigu rekorda, ali kandidatura nije prošla u završni izbor.
        </p>
        <h3 className="py-3">Kako izgledaju naše manifestacije?</h3>
        <p className="first-letter:pl-6 font-bold">
          Na svakoj od organizovanih akcija, građanima se pruža mogućnost da:
        </p>
        <ul className="">
          <li>
            - besplatno provere telesnu masu i sastav tela na specijalizovanim
            vagama,
          </li>
          <li>
            - dobiju stručne savete od nutricionista, lekara, farmaceuta i
            tehnologa,
          </li>{" "}
          <li>
            - razgovaraju o svojim navikama, ishrani i potencijalnim rizicima,
          </li>
          <li>
            - učestvuju u edukaciji i anketama koje se koriste za dalja
            istraživanja.
          </li>
        </ul>
        <h3 className="py-3">Značajni rezultati i saznanja</h3>
        <p className="first-letter:pl-6">
          Na Jesenjem festivalu zdravlja 2013., preko 300 ispitanika (pretežno
          žena starosti 50–60 godina) prošlo je kroz merenje. Rezultati su
          pokazali da je svaka dvadeseta osoba imala ozbiljne probleme sa
          telesnom težinom.
        </p>
        <p className="first-letter:pl-6">
          Na Prolećnom festivalu zdravlja 2016., uzorak od 250 građana
          (dominantno u starosnoj grupi 60–70 godina) otkrio još alarmantnije
          podatke: većina ispitanika bila je u stanju predgojaznosti, sa
          povišenim obimom struka, što predstavlja direktan faktor rizika za
          hronične nezarazne bolesti poput dijabetesa, srčanih problema i
          povišenog krvnog pritiska.
        </p>
        <h3 className="py-3">Naučna i društvena vrednost</h3>
        <p className="first-letter:pl-6">
          Svi prikupljeni podaci tokom manifestacija ne koriste se samo za lične
          savete – već postaju deo analiza i stručne edukacije. Rezultati se
          prezentuju na konferencijama i stručnim skupovima, kako bi se ukazalo
          na urgentnu potrebu za prevencijom gojaznosti i usvajanjem zdravih
          navika već od najranijeg uzrasta..
        </p>
        <div className="mt-3">
          <ImageCarusel />
        </div>
      </div>
    </div>
  );
};

export default Manifestacije;
