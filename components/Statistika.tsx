"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistika = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="bg-white py-8 md:py-12 text-center">
      <h2 className="mb-6 md:mb-16">Naši rezultati govore...</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={12} duration={2} suffix="+" />}
          </p>
          <p className="mt-2">Godina postojanja</p>
        </div>
        <div>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={14000} duration={2} suffix="+" />}
          </p>
          <p className="mt-2">Izvaganih građana</p>
        </div>
        <div className="hidden md:block">
          <p className="text-4xl md:text-5xl font-bold text-primary">
            {inView && <CountUp end={40} duration={2} suffix="+" />}
          </p>
          <p className="mt-2">Organizovanih manifestacija</p>
        </div>
      </div>
      <div className="pt-4 md:hidden ">
        <p className="text-4xl md:text-5xl font-bold text-primary">
          {inView && <CountUp end={40} duration={2} suffix="+" />}
        </p>
        <p className="mt-2">Organizovanih manifestacija</p>
      </div>
      <p className="first-letter:pl-6 mt-4 md:mt-8">
        “ <span className="text-primary font-bold">Svi na vagu</span>” nije samo
        slogan – to je pokret koji okuplja, edukuje i motiviše zajednicu. Naše
        manifestacije su otvorene za sve, a svaka vaga postaje prilika za novi
        početak.
      </p>
    </section>
  );
};

export default Statistika;
