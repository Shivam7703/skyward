"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiTrendingUp, FiCheckCircle, FiUsers, FiAward, FiDownload } from "react-icons/fi";
import { about } from "@/assets";
import Buttonmain from "../button";

// Stat & Graph Data
const stats = [
  {
    id: 1,
    title: "Projects Completed",
    value: "140+",
    percentage: 92,
    icon: FiCheckCircle,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Client ROI Growth",
    value: "350%",
    percentage: 88,
    icon: FiTrendingUp,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "Satisfied Clients",
    value: "98%",
    percentage: 98,
    icon: FiUsers,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Ad Conversion Rate",
    value: "4.8x",
    percentage: 82,
    icon: FiAward,
    color: "from-amber-500 to-orange-600",
  },
];

// Animation Variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-8 px-6 md:p-12 lg:px-20 text-zinc-800 overflow-hidden relative">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto  grid lg:grid-cols-14 gap-4 lg:gap-10 items-center"
      >
        {/* --- LEFT COLUMN: Styled Profile Frame (Matching Reference) --- */}
        <motion.div variants={itemVariant} className="lg:col-span-6 flex justify-center">
          <div className="relative p-4 rounded-3xl bg-[#ECF0F3] shadow-[-10px_-10px_20px_rgba(255,255,255,0.9),10px_10px_20px_rgba(0,0,0,0.12)] w-full">
            <div className="relative w-full h-[400px] sm:h-[550px] rounded-2xl overflow-hidden border border-white/60">
              <Image
                src={about} // Replace with your image path or import variable
                alt="Profile photo"
                fill
                className="object-cover object-left hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
            </div>

            {/* Experience Floating Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#ECF0F3] p-4 sm:p-5 rounded-2xl border border-white/80 shadow-[-6px_-6px_14px_rgba(255,255,255,0.9),6px_6px_14px_rgba(0,0,0,0.12)] flex items-center gap-3"
            >
              <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-xs font-semibold text-zinc-600 leading-snug">
                Years of Digital <br /> Marketing Excellence
              </div>
            </motion.div>
          </div>
        </motion.div>
<div></div>
        {/* --- RIGHT COLUMN: About Text & Animated Graph Metrics --- */}
        <motion.div variants={itemVariant} className="lg:col-span-7 flex flex-col justify-center">
          {/* Subtitle */}
          <span className="text-xs font-bold text-zinc-700 tracking-widest uppercase mb-2">
            About My Work
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-b from-zinc-950 to-zinc-600 capitalize bg-clip-text text-transparent leading-tight mb-6">
            Inquisitive & passionate about digital growth.
          </h2>

          {/* Paragraph Description */}
          <p className="text-gray-800 leading-relaxed mb-8 ">
            I am a Digital Marketing Specialist specializing in performance marketing, Meta Ads, and social media growth strategies. By leveraging data analytics and creative storytelling, I build scalable marketing engines that drive high-ROI conversions.
          </p>

          {/* --- GRAPH / STATS METRICS GRID --- */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="p-5 rounded-2xl bg-[#ECF0F3] shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),6px_6px_12px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col justify-between hover:shadow-[-2px_-2px_6px_rgba(255,255,255,0.8),2px_2px_6px_rgba(0,0,0,0.1)] transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#ECF0F3] shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.8),inset_2px_2px_5px_rgba(0,0,0,0.1)] text-blue-600">
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-bold text-zinc-700 uppercase tracking-wide">
                        {stat.title}
                      </span>
                    </div>
                    <span className="text-lg font-black text-zinc-800">{stat.value}</span>
                  </div>

                  {/* Animated Bar Graph Track */}
                  <div className="space-y-1.5">
                    <div className="w-full h-2.5 rounded-full bg-[#ECF0F3] shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.8),inset_2px_2px_4px_rgba(0,0,0,0.15)] overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${stat.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.percentage}%` }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <div className="flex justify-end">
                      <span className="text-[10px] font-bold text-gray-500">
                        {stat.percentage}% Performance Target
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Call / Resume Download Button */}
          <div>
                      <Buttonmain text={"Download Resume"} href="/contact-us" icon={<FiDownload/>} />

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}