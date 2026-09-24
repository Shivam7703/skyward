"use client";

import { motion, type Variants } from "framer-motion";
import { FiFacebook, FiLinkedin, FiInstagram, FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { banner } from "@/assets";
import Buttonmain from "../button";
import { FaArrowRight } from "react-icons/fa";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HomeBanner() {
  return (
    <section className="min-h-screen  flex items-center pt-28 pb-12 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-8xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center w-full"
      >
        {/* --- LEFT COLUMN --- */}
        <div className="flex flex-col gap-6">
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold text-zinc-700 tracking-widest uppercase"
          >
            Your Business needs
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl capitalize text-zinc-800 sm:text-5xl md:text-[75px]  leading-tight"
          >
            <span className="bg-linear-to-b from-black to-gray-500 bg-clip-text font-extrabold! text-transparent">
              A Digital
            </span>{" "}
            <span className="bg-zinc-800 bg-clip-text text-transparent font-semibold">
              Market Lorem
            </span>{" "}
            
            {/* Animated Typing Text */}
            <span className="text-red-600 font-medium inline-block">
              <Typewriter
                options={{
                  strings: ["Strategy", "Consist", "Expertise"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 90,
                  delay: 100,
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-xl text-base md:text-lg text-gray-800 leading-relaxed pt-1"
          >
            Delivering data-driven Meta Ads campaigns and comprehensive Social Media Management strategies to scale your revenue and online authority.
          </motion.p>

          {/* Social Icons with Real Brand Colors */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 py-2">
            <div className="p-3.5 rounded-full bg-[#ECF0F3] text-[#1877F2] shadow-[-4px_-4px_10px_rgba(255,255,255,0.8),4px_4px_10px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform">
              <FiFacebook size={20} />
            </div>

            <div className="p-3.5 rounded-full bg-[#ECF0F3] text-[#E4405F] shadow-[-4px_-4px_10px_rgba(255,255,255,0.8),4px_4px_10px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform">
              <FiInstagram size={20} />
            </div>

            <div className="p-3.5 rounded-full bg-[#ECF0F3] text-[#0A66C2] shadow-[-4px_-4px_10px_rgba(255,255,255,0.8),4px_4px_10px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform">
              <FiLinkedin size={20} />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={fadeUp} className="flex items-center gap-6 pt-2">
            <Buttonmain text={"Start Branding"} href="tel:+91 95608 84740" />

            <a
              href="#projects"
              className="text-xs font-bold hover:text-gray-700 text-blue-600 transition-colors uppercase tracking-wider"
            >
              View Case Studies →
            </a>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <motion.div
          className="relative flex justify-center items-center h-[90vw] md:h-130"
        >
          <div className="relative h-full w-auto aspect-square">
            <Image
              src={banner}
              alt="Digital Marketer Profile"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>

          <motion.div
            animate={{ y: [10, -15, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-0 bg-[#ECF0F3] border border-white/60 p-4 rounded-2xl shadow-[-4px_-4px_10px_rgba(255,255,255,0.8),4px_4px_10px_rgba(0,0,0,0.1)] flex items-center gap-3"
          >
            <div className="p-3 bg-[#ECF0F3] text-blue-600 rounded-xl shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(0,0,0,0.1)]">
              <FiShoppingCart size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800">High ROI Strategy</p>
              <p className="text-[10px] text-gray-500">Meta Ads Specialist</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}