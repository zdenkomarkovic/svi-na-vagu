import Image from "@/node_modules/next/image";
import React from "react";

const page = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto pb-8 pt-24 space-y-3 md:space-y-7">
      <h1 className="text-primary text-center text-3xl md:text-5xl font-bold">
        Udruženje “Svi na vagu”
      </h1>
      <p className="first-letter:pl-6">
        <span className="font-bold text-primary">
          {" "}
          Udruženje za prevenciju gojaznosti{" "}
        </span>{" "}
        “<span className="font-bold text-primary">Svi na vagu</span>” je
        nevladina, neprofitna organizacija osnovana sa misijom da doprinese
        stvaranju zdravijeg društva kroz edukaciju, prevenciju i lečenje
        gojaznosti. Naša vizija je da svaka osoba u Srbiji ima priliku da dobije
        znanje, podršku i alate za usvajanje zdravih životnih navika – na
        pristupačan i ljudski način.
      </p>
      <h2>Kako je sve počelo?</h2>
      <p className="first-letter:pl-6">
        Udruženje “Svi na vagu” nastalo je kao odgovor na rastući problem
        gojaznosti u Srbiji. Inicijativu je pokrenula{" "}
        <span className="font-bold text-primary">Milka Raičević</span>,
        nutricionista i aromaterapeut, sa dugogodišnjim iskustvom u radu sa
        pacijentima i posvećenošću zdravlju zajednice.
      </p>
      <p className="first-letter:pl-6">
        Prve aktivnosti Udruženja realizovane su 2013. godine na{" "}
        <span className="font-bold text-primary">
          Jesenjem festivalu zdravlja
        </span>
        , kada je organizovano javno merenje i savetovanje više od 300 građana.
        Tada su uočeni zabrinjavajući podaci: visok procenat gojaznosti i rizici
        povezani sa povećanim obimom struka. Od tada, Udruženje redovno
        učestvuje na festivalima, sajmovima zdravlja i stručnim skupovima širom
        Srbije.
      </p>
      <p className="first-letter:pl-6">
        Naš cilj nije samo da pružimo broj na vagi. Naš cilj je da edukujemo,
        osnažimo i motivišemo pojedince da razumeju svoje telo, da nauče kako
        pravilna ishrana utiče na zdravlje i kako da naprave održive promene u
        načinu života.
      </p>
      <p className="first-letter:pl-6">
        Kroz individualni rad i javne manifestacije, pomažemo ljudima da:
      </p>
      <ul>
        <li>
          {" "}
          - Shvate{" "}
          <span className="font-bold text-primary">
            kako nastaje gojaznost
          </span>{" "}
          i kako je prepoznati na vreme.
        </li>
        <li>
          - Nauče{" "}
          <span className="font-bold text-primary">šta su kalorije</span>, kako
          funkcioniše metabolizam i kako se pravilno hrane.
        </li>
        <li>
          - Razlikuju korisne i štetne informacije o{" "}
          <span className="font-bold text-primary">
            dijetama i suplementima
          </span>
          .
        </li>
        <li> - Usvoje rutinu zdravog života bez stresa i restrikcija.</li>
      </ul>

      <div className="border border-primary rounded-xl p-4 md:p-10 my-8">
        <h2 className="">
         
          O osnivaču - Milka Raičević
        </h2>
        <div className="text-center mb-6">
          <span className="block text-xl md:text-2xl font-bold text-primary"></span>
          <span className="block text-base md:text-lg font-semibold text-gray-700">DIJETETIČAR - NUTRICIONISTA</span>
          <span className="block text-base md:text-lg text-gray-600">Dugogodišnje iskustvo u oblasti dijetetike i javnog zdravlja</span>
        </div>
        <div className="flex flex-col md:flex-row gap-14 items-center justify-center">
          <div className="">
            <Image
              src={"/33111440_2027838250808728_2028944715293917184_n.jpg"}
              width={400}
              height={400}
              alt="svi na vagu"
              className="w-full aspect-square object-cover rounded-xl"
            />
          </div>
          <div>
          
            <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm md:text-base">
              <li>Osnivač i predsednik Udruženja SVI NA VAGU 2018</li>
              <li>Organizator manifestacije “Dan zdravih navika” 2017</li>
              <li>Stručni urednik časopisa “Smršaj zdravo” 2018 -2020</li>
              <li>Stručni konsultant Doma Zdravlja “Jedro” 2017</li>
              <li>Predsednik udruženja Dijetetičara Srbije 2016 – 2019</li>
              <li>Stručni saradnik Festivala Zdravlja Beograd 2009</li>
              <li>Predavač u Školi roditeljstva Nada Lazić 2015</li>
              <li>Predavač u Udruženju Roditelj 2005</li>
              <li>Nutricionista u DZ Palilula, Preventivni Centar 2003 – 2020</li>
              <li>Stručni saradnik časopisa Mama, U Zdravom telu i Politika 2003</li>
              <li>Urednik časopisa “Hrana kao lek” 1997</li>
              <li>Urednik emisije ,,Nešto obavezno i neobavezno”, TV Pink 1992</li>
              <li>Polivalentna patronažna služba DZ Voždovac 1978</li>
              <li>Organizator projekta „Zdrav svaki dan“ za đake osnovnih škola (1-4 razreda) 2021</li>
              <li>Organizator projekta Zagrizi zdravo za đake osnovnih škola (4-8 razred)</li>
              <li>Organizator akcije „Humanitarne jelke“: „Zdravko“, „Vakcinko“, „Sportiko“, „Zubko“ 2020</li>
            </ul>
          </div>
        </div>
            <div className="mt-8 flex flex-col md:flex-row justify-around gap-2 text-center">
              <a href="https://msbeograd.com/doctor/milka-raicevic/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 font-semibold  border border-primary rounded-lg px-5 py-1.5 bg-white/60" >Profil na msbeograd.com</a>
              <a href="https://strucnjacizaishranu.com/nutricionisti-dijeteticari/beograd/milka-raicevic/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 font-semibold  border border-primary rounded-lg px-5 py-1.5 bg-white/60">Profil na strucnjacizaishranu.com</a>
            </div>
      </div>
      <h2>Šta želimo da postignemo?</h2>
      <p className="first-letter:pl-6">
        Naš krajnji cilj je{" "}
        <span className="font-bold text-primary">
          zdravija i edukovanija populacija
        </span>
        , koja razume važnost pravilne ishrane i preventive, i ima pristup
        savetima koji nisu rezervisani samo za one sa novcem i vremenom, već{" "}
        <span className="font-bold text-primary">za svakoga</span>.
      </p>
      <p className="first-letter:pl-6">
        Gojaznost se ne rešava samo dijetom – ona se rešava znanjem, podrškom i
        sistemskim pristupom. Zato “Svi na vagu” ne meri samo kilograme – već
        meri i napredak, motivaciju i hrabrost da se krene u promenu.
      </p>
    </div>
  );
};

export default page;
