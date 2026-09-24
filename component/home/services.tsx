"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaShareNodes,
  FaMagnifyingGlass,
  FaBullhorn,
  FaPenNib,
  FaCode,
  FaServer,
  FaCamera,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaLocationDot,
  FaArrowRight,
} from "react-icons/fa6";
import { ads, smm, seo, content, host, web, shoot, ytube, wapp, emailm, gbusines } from "@/assets";
import Buttonmain from "../button";

// Services Data Matching Image Layout using React Icons
const services = [
  {
    category: "Digital Growth",
    title: "Social Media Marketing",
    description:
      "Boost your brand visibility and engage your audience across all major social media platforms with targeted strategies.",
    icon: <FaShareNodes />,
    tag: "Growth & Engagement",
    img: smm,
  },
  {
    category: "Organic Traffic",
    title: "SEO",
    description:
      "Rank higher on Google search results and drive consistent, organic high-intent traffic to your website.",
    icon: <FaMagnifyingGlass />,
    tag: "SEO Strategy",
    img: seo,
  },
  {
    category: "Performance Ads",
    title: "Paid Ads Management",
    description:
      "Maximize your ROI with targeted ad campaigns across Google, Meta, and LinkedIn for fast lead generation.",
    icon: <FaBullhorn />,
    tag: "PPC & ROI",
    img: ads,
  },
  {
    category: "Brand Strategy",
    title: "Content Creation",
    description:
      "High-quality copy, compelling narratives, and engaging visual graphics tailored specifically to resonate with your audience.",
    icon: <FaPenNib />,
    tag: "Creative Writing",
    img: content,
  },
  {
    category: "Web Solutions",
    title: "Web Development",
    description:
      "Modern, fast, and responsive website UI/UX designed to deliver seamless user experiences and higher conversions.",
    icon: <FaCode />,
    tag: "UI/UX & Code",
    img: web,
  },
  {
    category: "Infrastructure",
    title: "Hosting & Domain",
    description:
      "Secure, high-speed hosting solutions and domain setup ensuring 99.9% uptime and optimal website performance.",
    icon: <FaServer />,
    tag: "Security & Speed",
    img: host,
  },
  {
    category: "Media Production",
    title: "Video & Photoshoots",
    description:
      "Professional high-definition photo and video shoots tailored for your brand products, ad campaigns, and social channels.",
    icon: <FaCamera />,
    tag: "High-End Media",
    img: shoot,
  },
  {
    category: "Video Growth",
    title: "Youtube Marketing",
    description:
      "Channel management, video SEO, custom thumbnail designs, and optimized video marketing to build loyal subscribers.",
    icon: <FaYoutube />,
    tag: "Video Strategy",
    img: ytube,
  },
  {
    category: "Direct Messaging",
    title: "Whatsapp Marketing",
    description:
      "Automated chat solutions, promotional broadcasts, and direct customer support pipelines to double conversion rates.",
    icon: <FaWhatsapp />,
    tag: "Automation & Leads",
    img: wapp,
  },
  {
    category: "Direct Reach",
    title: "Email Marketing",
    description:
      "High-converting automated email sequences, newsletters, and lead nurture workflows to keep customers coming back.",
    icon: <FaEnvelope />,
    tag: "Automation",
    img: emailm,
  },
  {
    category: "Local Presence",
    title: "Google Business Listing",
    description:
      "Local SEO optimization to rank your business on Google Maps, generate local customer calls, and increase foot traffic.",
    icon: <FaLocationDot />,
    tag: "Local SEO",
    img: gbusines,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Top Subtitle and Heading */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-red-600 uppercase mb-3">
            What We Do For Your Brand
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-800 tracking-tight">
            Our Premium Services
          </h2>
        </div>

        {/* Sticky Stacked Service Cards */}
        <div className="relative flex flex-col gap-8 md:gap-16">
          {services.map((service, index) => (

            <div
              key={index}
              className="sticky top-24 md:top-28 max-w-6xl"
              style={{ zIndex: index + 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-linear-to-br from-[#ECF0F3] to-white rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden  border border-white/50 shadow-[-2px_-2px_6px_rgba(255,255,255,0.4),2px_2px_6px_rgba(0,0,0,0.1)]"
              >
                {/* Left Side: Content */}
                <div className="flex flex-col justify-center h-full space-y-6 p-8 md:p-12 lg:p-14">
                  <div>
                    <span className="text-sm font-medium text-zinc-500 tracking-wide">
                      {service.category}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 mt-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 mt-4 leading-relaxed text-sm md:text-base max-w-md">
                      {service.description}
                    </p>
                  </div>

                  <div className="border-t border-zinc-200 pt-6">
                    <Buttonmain text={"Learn More"} href="/contact-us" />

                  </div>
                </div>

                {/* Right Side: Visual Dark Card */}
                <div className="relative min-h-[280px] lg:min-h-[380px]  overflow-hidden group">
                  {/* Background Glow Effect */}


                  {/* Service Image */}
                  {service.img && (
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  {/* Top: icon + tag badge */}
                  <div className="p-3 bg-black/15 m-3 w-max text-xl text-white border border-white/10 rounded-full backdrop-blur-md">
                    {service.icon}
                  </div>

                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}