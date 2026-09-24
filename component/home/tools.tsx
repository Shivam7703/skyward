"use client";
import { motion } from "framer-motion";
import {
  FaWordpress,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiCoreldraw,
  SiDavinciresolve,
} from "react-icons/si";
import { TbBrandAdobePhotoshop, TbBrandAdobeIllustrator, TbBrandAdobeIndesign, TbBrandAdobeXd, TbBrandAdobeAfterEffect, TbBrandAdobePremiere } from "react-icons/tb";

const skillCategories = [
  {
    subtitle: "Skillset One",
    title: "WEBSITE DEVELOPMENT",
    skills: [
      { name: "WordPress", Icon: FaWordpress, color: "#21759B" },
      { name: "React", Icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
    ],
  },
  {
    subtitle: "Skillset Two",
    title: "GRAPHIC DESIGN",
    skills: [
      { name: "Adobe Photoshop", Icon: TbBrandAdobePhotoshop, color: "#31A8FF" },
      { name: "Adobe Illustrator", Icon: TbBrandAdobeIllustrator, color: "#FF9A00" },
      { name: "Adobe InDesign", Icon: TbBrandAdobeIndesign, color: "#FF3366" },
      { name: "Adobe XD", Icon: TbBrandAdobeXd, color: "#FF61F6" },
      { name: "CorelDRAW", Icon: SiCoreldraw, color: "#00B050" },
    ],
  },
  {
    subtitle: "Skillset Three",
    title: "VIDEO EDITING",
    skills: [
      { name: "Adobe Premiere Pro", Icon: TbBrandAdobePremiere, color: "#E272B3" },
      { name: "Adobe After Effects", Icon: TbBrandAdobeAfterEffect, color: "#9999FF" },
      { name: "DaVinci Resolve", Icon: SiDavinciresolve, color: "#E04E39" },
    ],
  },
];

export default function ToolSection() {
  return (
    <section className="py-20 px-4 md:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Top Subtitle and Heading */}
        <div className="text-center mb-16">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-red-600 uppercase mb-3">
            What Tools We Do Use
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-800 tracking-tight">
            Our Premium Tools & Services
          </h2>
        </div>

        {/* Tools Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className=" backdrop-blur-md bg-linear-to-br from-[#ECF0F3] to-white rounded-2xl p-8 shadow-[-6px_-6px_12px_rgba(255,255,255,0.8),6px_6px_12px_rgba(0,0,0,0.08)] border border-white/50 hover:shadow-[-2px_-2px_6px_rgba(255,255,255,0.8),2px_2px_6px_rgba(0,0,0,0.1)] flex flex-col justify-between"
            >
              <div>
               
                <h3 className="text-xl font-extrabold text-zinc-900 mt-1 mb-8 tracking-wide">
                  {category.title}
                </h3>

                {/* Skills List: Text on Left, Icon on Right */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => {
                    const IconComponent = skill.Icon;
                    return (
                      <div
                        key={skillIdx}
                        className="flex items-center justify-between border-b border-zinc-300 pb-3 last:border-0"
                      >
                        <span className="text-xs md:text-sm font-bold text-zinc-600 tracking-wider uppercase">
                          {skill.name}
                        </span>
                        <div className="p-2 rounded-lg shadow-md duration-300 hover:shadow-none bg-white border border-zinc-300">
                          <IconComponent
                            className="text-xl sm:text-3xl"
                            style={{ color: skill.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-zinc-600 mt-6 sm:mt-12">
          I consistently aim to employ the right techniques and methods to attain the optimal results.
        </p>
      </div>
    </section>
  );
}