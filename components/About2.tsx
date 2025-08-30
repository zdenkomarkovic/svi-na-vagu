"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "@/node_modules/next/image";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <h2 className=" font-bold text-primary flex flex-col  text-center">
            Ko smo mi?
          </h2>
          <p className=" first-letter:pl-6">
            <span className="font-bold text-primary">
              Udruženje za prevenciju gojaznosti
            </span>{" "}
            “<span className="font-bold text-primary">Svi na vagu</span>” je
            nevladino i neprofitno udruženje osnovano sa ciljem da probudi svest
            o važnosti prevencije gojaznosti i usvajanja zdravih životnih
            navika.
          </p>
          <p className=" first-letter:pl-6">
            Osnovano 2013. godine, udruženje je od samog početka usmereno na
            edukaciju građana, promociju pravilne ishrane i pružanje besplatne
            stručne pomoći putem merenja telesnog sastava i saveta stručnjaka.
            Tokom godina, aktivnosti udruženja su obuhvatile hiljade građana
            svih uzrasta.
          </p>
          <p className="first-letter:pl-6">
            Osnivač i inicijator udruženja je{" "}
            <span className="font-bold text-primary">Milka Raičević</span>,
            zdravstveni radnik, nutricionista i aromaterapeut sa višegodišnjim
            iskustvom u radu sa ljudima koji žele da povrate kontrolu nad svojom
            telesnom masom i zdravljem.
          </p>
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/IMG-6acd0c610d6a18f63a1cc2f2bf36b53e-V (1).jpg"}
            width={1000}
            height={1000}
            alt="svi-na-vagu"
            className="aspect-square object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
