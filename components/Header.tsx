"use client";

import Image from "next/image";
import Logo from "../public/download.jpeg";
import Link from "next/link";
import { MenuIcon, PhoneIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { navList } from "@/constants/index";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className="text-primary cursor-pointer" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  <motion.li
                    whileHover={{ color: "hsl(var(--primary))" }}
                    className={mobTitleStyles}
                  >
                    <SheetTrigger>{item.title}</SheetTrigger>
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = () => (
  <ul className="hidden gap-8 lg:flex  text-xl">
    {navList.map((item, index) => {
      return (
        <Link key={index} href={item.link}>
          <motion.li
            className="transition-colors underline-animation"
            whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
          >
            {item.title}
          </motion.li>
        </Link>
      );
    })}
  </ul>
);

export default function Header() {


  return (
    <header
      className={`flex justify-center bg-background/95 backdrop-blur text-primary supports-[backdrop-filter]:bg-background/60 shadow-md fixed top-0 left-0 right-0 z-[10] transition-colors`}
    >
      <nav className="flex items-center justify-between px-8 py-4 max-w-[80rem] w-full font-bold">
        <Link href="/" className="">
          <Image
            src={Logo}
            alt="svi na vagu"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <DesktopNav />
        <Link href="tel:+381637794985">
          <motion.button
            whileHover={{
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--primary))",
            }}
            className={`items-center justify-center rounded-full border-primary border-2 text-sm md:text-lg py-1 px-2 md:py-2 md:px-4 transition-colors flex`}
          >
            <PhoneIcon />
            <p className="">+381 63 77 94 985</p>
          </motion.button>
        </Link>
        <MobileMenu />
      </nav>
    </header>
  );
}
