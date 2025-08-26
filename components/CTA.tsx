"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MailIcon } from "lucide-react";

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Naslov sekcije */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              O gojaznosti
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Gojaznost je stanje prekomerne telesne mase uzrokovano viškom telesne masti. 
              Nastaje kada unos energije nadmaši potrošnju. Često je posledica loše ishrane i 
              fizičke neaktivnosti. Povezana je sa brojnim bolestima poput dijabetesa i srčanih oboljenja. 
              Leči se promenom navika i, po potrebi, terapijom,{" "}
              <span className="font-bold text-primary">OBAVEZNOM FIZIČKOM AKTIVNOŠĆU</span>.{" "}
              <span className="font-bold text-primary">2L VODE SVAKI DAN</span>.
            </p>
          </motion.div>

          {/* Poziv na akciju */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-primary/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              ZAKAŽITE SVOJ PREGLED
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Telefon */}
              <motion.a
                href="tel:+381637794985"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 bg-primary text-white rounded-xl py-4 px-6"
              >
                <PhoneIcon className="w-6 h-6" />
                <span className="font-semibold text-lg">+381 63 77 94 985</span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:milkaraicevic54@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 border-2 border-primary text-primary rounded-xl py-4 px-6 "
              >
                <MailIcon className="w-6 h-6" />
                <span className="font-semibold text-lg">Pošaljite poruku</span>
              </motion.a>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              * Besplatno savetovanje i merenje telesnog sastava
            </p>
          </motion.div>

          {/* Dodatne informacije */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-primary">Milka Raičević</span> - 
              nutricionista i aromaterapeut sa dugogodišnjim iskustvom
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CTA; 