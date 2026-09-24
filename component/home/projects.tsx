"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaChartLine,
  FaRegClock,
  FaArrowTrendUp,
  FaXmark,
  FaChevronLeft,
  FaChevronRight,
  FaMagnifyingGlassPlus,
} from "react-icons/fa6";

import {
  wedd,
  terr,
  nex,
  nat,
  holi,
  ev,
  edu,
  city,
  ashir,
  avssmm,
  holismm,
  nexussmm,
  pradipsmm,
  bill1,
  bill2,
  bro1,
  bro2,
  bro3,
  logo1,
  logo2,
  logo3,
  menu1,
  menu2,
  menu3,
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  seo1,
  seo2,
  seo3,
  seo4,
  seo5,
  seo6,
  seo7,
  ads1,
  ads2,
  ads3,
  ads4,
  ads5,
  ads6,
  ads7,
  ads8,
  ads9,
  shoot,
} from "@/assets";

const INK = "#121212";
const INK_SOFT = "#6E6E68";
const SURFACE = "#F7F6F1";
const CARD_BORDER = "#E8E6DD";
const FRAME_DARK = "#0A0A0C";

const categories = [
  "Web Development",
  "Social Media Marketing",
  "Search Engine Optimization",
  "Paid Ads",
  "Content Creation",
  "Graphic & Designs",
];

const AnalyticsData: Record<string, any> = {
  "Web Development": {
    accent: "#DC2626",
    accentDeep: "#E7000B",
    badge: "System Performance",
    metricTitle: "Avg Page Speed",
    metricValue: "98/100",
    growth: "+24% Uptime",
    chartPaths: [
      "M 0 60 Q 30 10, 60 40 T 120 20 T 180 50 T 240 10",
      "M 0 70 Q 30 30, 60 50 T 120 40 T 180 60 T 240 30",
    ],
    bars: [60, 85, 45, 95, 70, 100],
    stats: [
      { label: "Core Web Vitals", val: "Passed (99%)" },
      { label: "Avg Load Time", val: "0.42s" },
      { label: "Active Requests", val: "1.2k/sec" },
    ],
  },
  "Social Media Marketing": {
    accent: "#DB2777",
    accentDeep: "#BE185D",
    badge: "Engagement Engine",
    metricTitle: "Total Impressions",
    metricValue: "1.4M",
    growth: "+148% Reach",
    chartPaths: [
      "M 0 80 Q 40 20, 80 60 T 160 10 T 240 40",
      "M 0 90 Q 40 40, 80 80 T 160 30 T 240 60",
    ],
    bars: [40, 65, 80, 90, 85, 98],
    stats: [
      { label: "Follower Growth", val: "+24.5k" },
      { label: "Engagement Rate", val: "8.7%" },
      { label: "Shares & Saves", val: "18.2k" },
    ],
  },
  "Search Engine Optimization": {
    accent: "#2563EB",
    accentDeep: "#1D4ED8",
    badge: "SEO Insights",
    metricTitle: "Organic Keywords",
    metricValue: "4,820",
    growth: "#1 Rank Achieved",
    chartPaths: [
      "M 0 90 Q 30 70, 70 30 T 140 40 T 240 10",
      "M 0 95 Q 30 80, 70 50 T 140 60 T 240 30",
    ],
    bars: [30, 45, 60, 75, 88, 96],
    stats: [
      { label: "Domain Authority", val: "DA 64 (+12)" },
      { label: "Organic Clicks", val: "320k/mo" },
      { label: "Backlinks Earned", val: "1,240" },
    ],
  },
  "Paid Ads": {
    accent: "#EA580C",
    accentDeep: "#C2410C",
    badge: "PPC Conversion",
    metricTitle: "Return On Ad Spend",
    metricValue: "4.8x ROAS",
    growth: "-32% CPL",
    chartPaths: [
      "M 0 50 Q 50 10, 100 60 T 180 20 T 240 5",
      "M 0 70 Q 50 30, 100 80 T 180 40 T 240 20",
    ],
    bars: [70, 50, 90, 65, 80, 100],
    stats: [
      { label: "Total Conversions", val: "3,890" },
      { label: "Cost Per Lead", val: "$4.12" },
      { label: "Ad Spend Managed", val: "$45,000" },
    ],
  },
  "Content Creation": {
    accent: "#16A34A",
    accentDeep: "#15803D",
    badge: "Content Reach",
    metricTitle: "Content Reads",
    metricValue: "850k",
    growth: "+82% Time Spent",
    chartPaths: [
      "M 0 70 Q 40 30, 80 50 T 160 20 T 240 40",
      "M 0 85 Q 40 50, 80 70 T 160 40 T 240 65",
    ],
    bars: [50, 70, 60, 90, 75, 85],
    stats: [
      { label: "Avg Reading Time", val: "4m 12s" },
      { label: "Articles Published", val: "140+" },
      { label: "Lead Magnets", val: "22k DLs" },
    ],
  },
  "Graphic & Designs": {
    accent: "#9333EA",
    accentDeep: "#7E22CE",
    badge: "UI/UX Metrics",
    metricTitle: "Usability Score",
    metricValue: "96.4%",
    growth: "+40% Retention",
    chartPaths: [
      "M 0 60 Q 30 20, 90 50 T 170 10 T 240 30",
      "M 0 80 Q 30 40, 90 70 T 170 30 T 240 50",
    ],
    bars: [80, 60, 95, 70, 90, 85],
    stats: [
      { label: "User Task Success", val: "98.2%" },
      { label: "Bounce Rate", val: "21% (-15%)" },
      { label: "Design Components", val: "250+ UI" },
    ],
  },
};

const ProjectData: Record<string, any[]> = {
  "Web Development": [
    { img: wedd, url: "https://theweddingz.in/", title: "The Weddingz", para: "Custom web platform with seamless booking workflow and dynamic showcase.", type: "url" },
    { img: terr, url: "https://terrifictrips.in/", title: "Terrific Trip", para: "Modern e-commerce UI featuring optimized asset loading and fast checkout.", type: "url" },
    { img: nex, url: "https://www.nexuscoreoverseas.com/", title: "Nexuscore Overseas", para: "High-performance corporate web platform built with responsive layouts.", type: "url" },
    { img: nat, url: "https://nationize.in/", title: "Nationize Visas", para: "Scalable visa consultation hub with dynamic multi-step form applications.", type: "url" },
    { img: holi, url: "https://www.holidaysbyvalueadz.com/", title: "Holidays By Valueadz", para: "Custom travel package engine with interactive search and instant booking.", type: "url" },
    { img: city, url: "https://cityspace.construction/", title: "City Real Estate", para: "Modern architectural portal with immersive property portfolio listings.", type: "url" },
    { img: ev, url: "https://ev-smart.in/", title: "EV Smart Portal", para: "Electric vehicle portal featuring interactive product comparisons.", type: "url" },
    { img: edu, url: "https://edunom.com/", title: "Edunom Learning", para: "Educational directory designed for quick course navigation and registration.", type: "url" },
    { img: ashir, url: "https://www.ashirwadplastics.com/", title: "Ashirwad Plastics", para: "Corporate industrial catalog with full inventory showcase.", type: "url" },
  ],
  "Social Media Marketing": [
    { img: nexussmm, url: "https://www.instagram.com/nexuscoreoverseas/?hl=en", title: "Nexuscore Overseas", para: "Social campaign strategy resulting in 3x organic audience engagement.", type: "url" },
    { img: avssmm, url: "https://www.instagram.com/avsimmigration/?hl=en", title: "AVS Immigration", para: "Viral creative campaign designed for Instagram reels & ad placements.", type: "url" },
    { img: holismm, url: "https://www.instagram.com/holidays_by_valueadz/?hl=en", title: "Holidays by Valueadz", para: "Targeted destination storytelling driving organic conversion and follower growth.", type: "url" },
    { img: pradipsmm, url: "https://www.instagram.com/guidancewithpradeep/?hl=en", title: "Pradeep Jain", para: "Personal brand positioning campaign with high engagement content carousels.", type: "url" },
  ],
  "Search Engine Optimization": [
    { img: seo1, title: "SEO Performance Dashboard", para: "Comprehensive audit and keyword growth tracking report.", type: "image" },
    { img: seo2, title: "Organic Growth Audit", para: "Detailed breakdown of backlink building and technical indexing.", type: "image" },
    { img: seo3, title: "Keyword Ranking Growth", para: "First-page SERP dominance analysis across competitive niches.", type: "image" },
    { img: seo4, title: "Technical SEO Metrics", para: "Core Web Vitals enhancement and crawl budget optimization.", type: "image" },
    { img: seo5, title: "Traffic & Impression Analysis", para: "Multi-channel organic traffic growth and session duration metrics.", type: "image" },
    { img: seo6, title: "Content Indexing Overview", para: "Structured schema deployment and snippet visibility report.", type: "image" },
    { img: seo7, title: "Conversion & CTR Optimization", para: "Search intent alignment driving high CTR organic leads.", type: "image" },
  ],
  "Paid Ads": [
    // 1-4 Social Media Ads
    { img: ads1, title: "Social Media Ad Creative", para: "High-converting Meta ad creative engineered for engagement.", subCat: "Social Media Ads", type: "image" },
    { img: ads2, title: "Social Media Ad Creative", para: "Targeted Instagram story ad driving immediate CTA click-throughs.", subCat: "Social Media Ads", type: "image" },
    { img: ads3, title: "Social Media Ad Creative", para: "Retargeting feed visual designed for high audience retention.", subCat: "Social Media Ads", type: "image" },
    { img: ads4, title: "Social Media Ad Creative", para: "Omni-channel social banner optimized for mobile placements.", subCat: "Social Media Ads", type: "image" },
    // 5-9 Google Ads
    { img: ads5, title: "Google Display Ad", para: "Search network display ad optimized for targeted click rate.", subCat: "Google Ads", type: "image" },
    { img: ads6, title: "Google Search Banner", para: "High-intent PPC campaign design delivering lower Cost Per Lead.", subCat: "Google Ads", type: "image" },
    { img: ads7, title: "Google Remarketing Ad", para: "Conversion-focused responsive ad design for Google Display Network.", subCat: "Google Ads", type: "image" },
    { img: ads8, title: "Google Performance Max Ad", para: "Multi-asset campaign element tailored for maximum ROAS.", subCat: "Google Ads", type: "image" },
    { img: ads9, title: "Google Shopping Ad", para: "Product highlight visual focused on instant buyer conversion.", subCat: "Google Ads", type: "image" },
  ],
  "Content Creation": [
    { img: shoot, title: "Brand Photography Shoot", para: "High-resolution commercial photography session for promotional assets.", type: "image" },
  ],
  "Graphic & Designs": [
    { img: bill1, title: "Billboard Design", para: "Large-scale outdoor billboard advertising visual.", subCat: "Billboard", type: "image" },
    { img: bill2, title: "Billboard Design", para: "High-impact highway display banner layout.", subCat: "Billboard", type: "image" },
    { img: logo1, title: "Brand Identity Logo", para: "Minimalist corporate vector logo design.", subCat: "Logo", type: "image" },
    { img: logo2, title: "Brand Identity Logo", para: "Modern typography & geometric icon mark.", subCat: "Logo", type: "image" },
    { img: logo3, title: "Brand Identity Logo", para: "Emblem and badge style brand identity design.", subCat: "Logo", type: "image" },
    { img: menu1, title: "Restaurant Menu Card", para: "Elegant food & beverage menu layout.", subCat: "Menu", type: "image" },
    { img: menu2, title: "Restaurant Menu Card", para: "Modern multi-page dining menu presentation.", subCat: "Menu", type: "image" },
    { img: menu3, title: "Restaurant Menu Card", para: "Minimalist café menu layout with typography focus.", subCat: "Menu", type: "image" },
    { img: bro1, title: "Corporate Brochure", para: "Tri-fold business brochure layout design.", subCat: "Brochure", type: "image" },
    { img: bro2, title: "Corporate Brochure", para: "Multi-page company profile brochure showcase.", subCat: "Brochure", type: "image" },
    { img: bro3, title: "Corporate Brochure", para: "Product line showcase tri-fold flyer design.", subCat: "Brochure", type: "image" },
    { img: post1, title: "Social Media Post", para: "Promotional promotional post creative.", subCat: "Posts", type: "image" },
    { img: post2, title: "Social Media Post", para: "Feature announcement Instagram square graphic.", subCat: "Posts", type: "image" },
    { img: post3, title: "Social Media Post", para: "Event celebration and seasonal social poster.", subCat: "Posts", type: "image" },
    { img: post4, title: "Social Media Post", para: "Product highlight graphic with brand colors.", subCat: "Posts", type: "image" },
    { img: post5, title: "Social Media Post", para: "Educational carousel slide design layout.", subCat: "Posts", type: "image" },
    { img: post6, title: "Social Media Post", para: "Customer testimonial & review highlight card.", subCat: "Posts", type: "image" },
    { img: post7, title: "Social Media Post", para: "Flash sale and discount announcement graphic.", subCat: "Posts", type: "image" },
    { img: post8, title: "Social Media Post", para: "Brand engagement & quote visual template.", subCat: "Posts", type: "image" },
    { img: post9, title: "Social Media Post", para: "Creative storytelling banner for social feeds.", subCat: "Posts", type: "image" },
  ],
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const [lightBoxIndex, setLightBoxIndex] = useState<number | null>(null);

  const activeProjects = ProjectData[activeCategory] || [];
  const currentAnalytics = AnalyticsData[activeCategory];
  const ACCENT = currentAnalytics.accent;
  const ACCENT_DEEP = currentAnalytics.accentDeep;

  const handleCardClick = (project: any, index: number) => {
    if (project.type === "url" && project.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
    } else {
      setLightBoxIndex(index);
    }
  };

  const handlePrevLightBox = () => {
    if (lightBoxIndex === null) return;
    setLightBoxIndex((prev) => (prev! === 0 ? activeProjects.length - 1 : prev! - 1));
  };

  const handleNextLightBox = () => {
    if (lightBoxIndex === null) return;
    setLightBoxIndex((prev) => (prev! === activeProjects.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-red-600 md:text-sm font-semibold tracking-[0.2em] uppercase mb-3 transition-colors duration-300">
            Our Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: INK }}>
            Our Premium Quality Work
          </h2>
        </div>

        {/* Category Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const catColor = AnalyticsData[cat].accent;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightBoxIndex(null);
                }}
                className={`px-5 py-2.5 rounded-2xl text-xs md:text-sm font-semibold transition-all duration-300 shadow-sm border ${
                  isActive ? "scale-105" : "hover:bg-black/[0.03]"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: catColor,
                        color: "#FFFFFF",
                        borderColor: catColor,
                        boxShadow: `0 10px 20px -8px ${catColor}99`,
                      }
                    : {
                        backgroundColor: "#FFFFFF",
                        color: INK_SOFT,
                        borderColor: CARD_BORDER,
                      }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT SIDE: Phone Mockup */}
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-24">
            <div className="relative">
              <div className="absolute -left-0.75 top-24 w-0.75 h-8 bg-zinc-700 rounded-l-sm" />
              <div className="absolute -left-0.75 top-36 w-0.75 h-14 bg-zinc-700 rounded-l-sm" />
              <div className="absolute -left-0.75 top-52 w-0.75 h-14 bg-zinc-700 rounded-l-sm" />
              <div className="absolute -right-0.75 top-32 w-0.75 h-16 bg-zinc-700 rounded-r-sm" />

              <div
                className="w-72.5 sm:w-77.5 rounded-[38px] p-2.5 shadow-2xl relative"
                style={{ backgroundColor: FRAME_DARK }}
              >
                {/* Screen */}
                <div
                  className="rounded-[30px] overflow-hidden relative flex flex-col justify-between min-h-120 px-4 pb-4 pt-3"
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div className="w-16 h-4 bg-black mx-auto rounded-full mb-4 flex justify-end items-center pr-1.5">
                    <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 flex flex-col"
                    >
                      <div className="flex justify-between items-center mb-4 px-0.5">
                        <div>
                          <p
                            className="text-[9px] font-medium uppercase tracking-widest"
                            style={{ color: ACCENT_DEEP }}
                          >
                            {currentAnalytics.badge}
                          </p>
                          <h4 className="text-[13px] font-bold flex items-center gap-1.5 mt-0.5" style={{ color: INK }}>
                            <FaChartLine style={{ color: ACCENT_DEEP }} /> Realtime Metrics
                          </h4>
                        </div>
                        <span
                          className="text-[9px] px-2 py-0.5 font-semibold rounded-full border"
                          style={{
                            backgroundColor: `${ACCENT}33`,
                            color: ACCENT_DEEP,
                            borderColor: `${ACCENT}66`,
                          }}
                        >
                          Live
                        </span>
                      </div>

                      <div
                        className="p-3 rounded-2xl border mb-3 flex justify-between items-end"
                        style={{ backgroundColor: SURFACE, borderColor: CARD_BORDER }}
                      >
                        <div>
                          <span className="text-[10px]" style={{ color: INK_SOFT }}>
                            {currentAnalytics.metricTitle}
                          </span>
                          <h3 className="text-xl font-black mt-1" style={{ color: INK }}>
                            {currentAnalytics.metricValue}
                          </h3>
                        </div>
                        <div
                          className="text-[10px] font-bold flex items-center gap-1 px-1.5 py-1 rounded-md border"
                          style={{
                            color: ACCENT_DEEP,
                            backgroundColor: `${ACCENT}26`,
                            borderColor: `${ACCENT}4D`,
                          }}
                        >
                          <FaArrowTrendUp /> {currentAnalytics.growth}
                        </div>
                      </div>

                      <div
                        className="p-3 rounded-2xl border mb-3"
                        style={{ backgroundColor: SURFACE, borderColor: CARD_BORDER }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-semibold" style={{ color: INK }}>
                            Growth Curve
                          </span>
                          <span className="text-[9px] flex items-center gap-1" style={{ color: INK_SOFT }}>
                            <FaRegClock /> 30 Days
                          </span>
                        </div>

                        <div className="relative h-20 w-full mb-2">
                          <svg className="w-full h-full overflow-visible" viewBox="0 0 240 100" preserveAspectRatio="none">
                            <line x1="0" y1="25" x2="240" y2="25" stroke="#DDDBD0" strokeDasharray="3 3" strokeWidth="0.8" />
                            <line x1="0" y1="50" x2="240" y2="50" stroke="#DDDBD0" strokeDasharray="3 3" strokeWidth="0.8" />
                            <line x1="0" y1="75" x2="240" y2="75" stroke="#DDDBD0" strokeDasharray="3 3" strokeWidth="0.8" />

                            <path d={currentAnalytics.chartPaths[1]} fill="none" stroke="#B4B2A6" strokeWidth="2" opacity="0.7" />
                            <path d={currentAnalytics.chartPaths[0]} fill="none" stroke={ACCENT} strokeWidth="3" />
                          </svg>
                        </div>

                        <div className="flex justify-between items-end h-8 pt-2 border-t px-1" style={{ borderColor: CARD_BORDER }}>
                          {currentAnalytics.bars.map((height: number, i: number) => (
                            <div
                              key={i}
                              className="w-4 rounded-t-md relative overflow-hidden h-full flex items-end"
                              style={{ backgroundColor: "#ECEADF" }}
                            >
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${height}%` }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="w-full rounded-t-md"
                                style={{
                                  background: `linear-gradient(to top, ${ACCENT_DEEP}, ${ACCENT})`,
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        {currentAnalytics.stats.map((stat: any, idx: number) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center px-3 py-1.5 rounded-xl border text-[11px]"
                            style={{ backgroundColor: SURFACE, borderColor: CARD_BORDER }}
                          >
                            <span className="font-medium" style={{ color: INK_SOFT }}>
                              {stat.label}
                            </span>
                            <span className="font-bold" style={{ color: INK }}>
                              {stat.val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="w-24 h-1 bg-zinc-300 mx-auto rounded-full mt-3" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Light Cards Grid */}
          <div className="lg:col-span-8 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {activeProjects.map((project: any, index: number) => (
                  <div
                    key={index}
                    onClick={() => handleCardClick(project, index)}
                    className="group rounded-3xl p-4 duration-300 flex flex-col justify-between bg-linear-to-br from-[#ECF0F3] to-white shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),6px_6px_12px_rgba(0,0,0,0.08)] border border-white/50 hover:shadow-[-2px_-2px_6px_rgba(255,255,255,0.8),2px_2px_6px_rgba(0,0,0,0.1)] transition-all cursor-pointer"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-5 border shadow-md border-white">
                        <Image
                          src={project.img}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {project.type === "image" && (
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="p-3 bg-white/90 rounded-full text-black shadow-lg">
                              <FaMagnifyingGlassPlus className="text-lg" />
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Title & Category Tag */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] uppercase tracking-wider font-bold" style={{ color: ACCENT_DEEP }}>
                          {project.subCat || activeCategory}
                        </span>
                        {project.type === "url" ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg bg-zinc-100 transition-colors hover:brightness-95"
                            style={{ color: INK_SOFT }}
                          >
                            <FaArrowUpRightFromSquare className="text-xs" />
                          </a>
                        ) : (
                          <span className="p-1.5 rounded-lg bg-zinc-100 text-xs" style={{ color: INK_SOFT }}>
                            <FaMagnifyingGlassPlus />
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: INK }}>
                        {project.title}
                      </h3>

                      <p className="text-xs leading-relaxed line-clamp-3" style={{ color: INK_SOFT }}>
                        {project.para}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t flex justify-between items-center" style={{ borderColor: CARD_BORDER }}>
                      <span className="text-xs font-bold inline-flex items-center gap-1.5" style={{ color: ACCENT_DEEP }}>
                        {project.type === "url" ? "Visit Website →" : "View Graphic →"}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL WITH PREV/NEXT CONTROLS */}
      <AnimatePresence>
        {lightBoxIndex !== null && activeProjects[lightBoxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightBoxIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightBoxIndex(null)}
                className="absolute -top-12 right-0 md:top-2 md:right-2 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                aria-label="Close Lightbox"
              >
                <FaXmark className="text-xl" />
              </button>

              {/* Prev Button */}
              {activeProjects.length > 1 && (
                <button
                  onClick={handlePrevLightBox}
                  className="absolute left-2 md:left-4 z-10 p-3.5 bg-black/60 hover:bg-black/90 text-white rounded-full border border-white/20 transition-all shadow-lg"
                  aria-label="Previous Image"
                >
                  <FaChevronLeft className="text-lg" />
                </button>
              )}

              {/* Next Button */}
              {activeProjects.length > 1 && (
                <button
                  onClick={handleNextLightBox}
                  className="absolute right-2 md:right-4 z-10 p-3.5 bg-black/60 hover:bg-black/90 text-white rounded-full border border-white/20 transition-all shadow-lg"
                  aria-label="Next Image"
                >
                  <FaChevronRight className="text-lg" />
                </button>
              )}

              {/* Image & Detail Area */}
              <div className="relative w-full h-[60vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={activeProjects[lightBoxIndex].img}
                  alt={activeProjects[lightBoxIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Footer Information */}
              <div className="mt-4 text-center text-white">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 uppercase tracking-widest">
                  {activeProjects[lightBoxIndex].subCat || activeCategory}
                </span>
                <h3 className="text-xl font-bold mt-2">{activeProjects[lightBoxIndex].title}</h3>
                <p className="text-xs text-zinc-300 max-w-lg mt-1">{activeProjects[lightBoxIndex].para}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}