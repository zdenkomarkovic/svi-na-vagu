"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";

const PozoviteNasOdmah = () => {
  return (
    <div className="bg-foreground text-muted md:mt-10 py-4 md:py-14">
      <div className="container px-2 md:px-4 mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-20">
        <div className="space-y-1 md:space-y-3 text-base md:text-2xl  text-center">
          <p>Želite da znate više o svom telesnom sastavu?</p>
          <p>Niste sigurni kako da započnete promene?</p>
          <p>Potrebna vam je stručna, ali ljudska podrška?</p>
          <p className="text-2xl md:text-4xl">
            Pridružite se udruženju “{" "}
            <span className="font-bold">Svi na vagu</span> ”! Zakažite besplatno
            savetovanje i napravite prvi korak ka zdravlju.
          </p>
        </div>
        <a href="tel:+381637794985">
          <motion.button
            whileHover={{ translateY: "-5px" }}
            whileTap={{ scale: 0.95 }}
            className=" text-nowrap flex gap-3 text-2xl md:text-3xl items-center text-muted-foreground bg-muted rounded-lg px-4 md:px-8 md:py-3 py-2"
          >
            <PhoneIcon /> Pozovite odmah
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
