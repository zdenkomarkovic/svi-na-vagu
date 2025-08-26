"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PravilnaIshrana = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Naslov sekcije */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className=" mb-6">
              PRAVILNA ISHRANA
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1  gap-12  items-center">
            {/* Tekst sadržaj */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 "
            >
              {/* Prvi paragraf */}
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <span className="font-bold text-primary">Obezbeđuje telu potrebne hranjive materije</span>{" "}
                  neophodne za jačenje imuniteta, pomaže organizmu da se brani od infekcija. 
                  Dovoljnim unosom vitamina (C, D, E, K), minerala (cink, selen, gvožđe) i proteina.
                </p>
              </div>

              {/* Drugi paragraf */}
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <span className="font-bold text-primary">Štiti srce i krvne sudove</span> ako unosimo manje zasićenih masti, 
                  šećera, palmine masti, soli. Unosimo svakodnevno u ishrani namirnice sa vlaknima, 
                  ribom, povrće i voće i na taj način smanjujemo rizik od povišenog arteriskog pritiska, 
                  holesterola kao i od srčanih bolesti. Uravnoteženi obroci sprečavaju nagle skokove 
                  šećera i insulina, prevenira dijabetes i gojaznost.
                </p>
              </div>

              {/* Treći paragraf */}
              <div className="space-y-4">
                <p className="leading-relaxed">
                  <span className="font-bold text-primary">Poboljšava pamčenje i koncentraciju</span>, smanjuje osećaj umora, 
                  unosom vitamina B grupe, omega-3 masne kiseline, dovoljan unos vode. Jača kosti i mišiće 
                  unosom kalcijuma, vitamina D, proteina i magnezijuma a čuvaju koštanu i mišićnu masu 
                  glavni u borbi protiv osteoporoze.
                </p>
              </div>
            </motion.div>

            {/* Slika */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className=""
            >
           
                <Image
                  src="/IMG-f4e0ab93e1f2cc018cfdd6d7d1474885-V.jpg"
                  alt="Pravilna ishrana"
                    width={1000}
                    height={1000}
                  className="object-cover h-full w-full hover:scale-105 transition-transform duration-500"
                />
            
            </motion.div>
          </div>

          {/* Kalorije sekcija */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-primary/20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
              ŠTA SU KALORIJE
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-primary">Kalorije su mera za energiju</span> koju hrana i piće daju našem telu. 
                  One se koriste kao &quot;gorivo&quot; za sve telesne funkcije – od disanja i rada srca do hodanja i razmišljanja.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-primary">Hrana sa više kalorija</span> daje više energije, ali višak koji ne potrošimo 
                  pretvara se u masne rezerve.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-primary">Postoje kalorije iz ugljenih hidrata</span>, proteina i masti, a svaka grupa 
                  hranljivih materija daje različitu količinu energije.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-primary">Balans unosa i potrošnje kalorija</span> je ključan za održavanje zdrave 
                  telesne mase i opšteg zdravlja.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xl font-semibold text-primary italic">
              &quot;Kalorije iz hrane su energija koje telo koristi za rad i život.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PravilnaIshrana; 