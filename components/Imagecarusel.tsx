"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { motion } from "framer-motion";
import { Card } from "./ui/card";
import Image from "@/node_modules/next/image";

const ImageCarusel = () => {
  return (
    <div className=" container px-2 md:px-8 mx-auto">
      <Carousel
        className="w-screen px-0 overflow-x-visible"
        opts={{
          loop: true,
          direction: "rtl",
          align: "center",
        }}
      >
        <CarouselContent
          className="flex flex-row-reverse gap-1 ml-1 rtl"
          style={{ transform: "none" }}
        >
          {images.map((image, i) => (
            <CarouselItem
              key={i}
              className="pl-1 basis-[83%] md:basis-[45%] lg:basis-[17%]"
            >
              <div className="px-1 flex flex-col">
                <ImageCard image={image}></ImageCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageCarusel;

const ImageCard = ({ image }: { image: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=""
    >
      <Card
        className={` bg-transparent relative overflow-hidden  rounded-3xl text-white `}
      >
        <Image
          src={image}
          width={200}
          height={200}
          alt="micro-hair-clinic"
          className=" w-full aspect-square object-cover"
        />
      </Card>
    </motion.div>
  );
};

const images: string[] = [
  "/vaga (1).jpg",
  "/vaga (2).jpg",
  "/vaga (3).jpg",
  "/vaga (4).jpg",
  "/vaga (5).jpg",
  "/vaga (6).jpg",
  "/vaga (7).jpg",
  "/vaga (8).jpg",
  "/vaga (9).jpg",
  "/vaga (10).jpg",
  "/vaga (11).jpg",
  "/vaga (12).jpg",
  "/vaga (13).jpg",
  "/vaga (14).jpg",
  "/vaga (15).jpg",
  "/vaga (16).jpg",
  "/vaga (17).jpg",
  "/vaga (18).jpg",
  "/vaga (19).jpg",
  "/vaga (20).jpg",
  "/vaga (21).jpg",
  "/vaga (22).jpg",
  "/vaga (23).jpg",
  "/vaga (24).jpg",
  "/vaga (25).jpg",
  "/vaga (26).jpg",
];
