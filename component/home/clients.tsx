"use client";

import Image from "next/image";
import {
  cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, cl10, cl11, cl12,
} from "@/assets";
import { motion } from "framer-motion";

const clientLogos = [
  cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9, cl10, cl11, cl12,
];

export default function ClientSection() {
  return (
    <section className="py-20 px-4 md:px-8 min-h-screen">
      <div className="text-center mb-16">
        <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-red-600 uppercase mb-3">
          Top brands we have worked for
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-800 tracking-tight">
          Our Premium Clients
        </h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="group relative flex items-center justify-center p-4 md:p-6 rounded-2xl bg-white/60 backdrop-blur-lg transition-all duration-300 min-h-30"
            >
              <div className="relative w-full h-12 flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  className="object-contain max-h-full min-h-16 max-w-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}