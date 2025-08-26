"use client";

import Hero3 from "../public/BF_BG_Svi_Na_Vagu_880x542px.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex min-h-[100dvh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" />
      <Image
        src={Hero3}
        alt="slep puric"
        fill
        className="w-full h-[100dvh] object-cover"
      />

      <div className="relative container px-2 md:px-4 mx-auto  flex flex-col gap-6 items-center justify-center z-[1] ">
        <h1 className="text-muted md:text-7xl text-xl px-4 text-center">
          Udruženje{" "}
          <span className=" font-extrabold text-2xl md:text-8xl">
            Svi na vagu
          </span>{" "}
          - Vaš prvi korak ka zdravlju
        </h1>
        <h2 className="text-muted font-medium md:text-5xl text-md">
          Osnivač Milka Raičević, nutricionista i aromaterapeut, vodi vas kroz
          edukaciju, merenje i podršku u borbi protiv gojaznosti.
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <a href="tel:+381637794985">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-muted border-muted border-[1px] rounded-lg px-4 md:px-8 md:py-3 py-2 font-medium"
            >
              Pozovite odmah i zakažite merenje
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
