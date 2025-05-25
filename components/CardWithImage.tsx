import Image from "@/node_modules/next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const CardWithImage = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto text-center md:py-20 space-y-10 ">
      <h2 className="">
        Tokom godina, Udruženje je sprovelo niz aktivnosti širom Srbije,
        uključujući:
      </h2>
      <div className="flex flex-col md:flex-row md:gap-20  items-stretch ">
        <div>
          <Image
            src={"/72673884_719774845100502_4918049982726012928_n.jpg"}
            width={600}
            height={600}
            alt="slep cacak"
            className=" object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-0 py-8 md:py-12 md:justify-around text-left">
          <p className="">
            - Javna merenja telesnog sastava na specijalizovanim vagama
          </p>
          <p className="">
            - Besplatno savetovanje sa nutricionistima i lekarima
          </p>
          <p className=""> - Edukativne radionice i seminare za sve uzraste</p>
          <p className=""> - Učešće na festivalima zdravlja i sajmovima</p>
          <p className="">
            - Objavljivanje stručnih i popularnih tekstova o ishrani,
            suplementima i zdravlju
          </p>
          <p className=""> - Organizaciju stručnih skupova i konferencija</p>
        </div>
      </div>
      <p>
        Svi naši programi su otvoreni, inkluzivni i besplatni za sve građane,
        bez obzira na uzrast, pol ili prethodno iskustvo.
      </p>
    </div>
  );
};

export default CardWithImage;
