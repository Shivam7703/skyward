"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube,
} from "react-icons/fa";

/* ---- edit these ---- */
const PHONE = "+91 95608 84740";
const PHONE_HREF = "tel:+91 95608 84740";
const WHATSAPP_HREF =
  "https://wa.me/919560884740?text=" +
  encodeURIComponent("Hi! I'd like to know more about your services.");
const EMAIL = "pranavex430@gmail.com";
const LOCATION = "New Delhi, India";

const SOCIALS = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const SERVICES = [
  "Social Media Marketing",
  "Search Engine Optimization",
  "Paid Ads",
  "Content Creation",
  "Web Design & Development",
  "Hosting & Domain",
  "Videoshoots & Photoshoots",
  "YouTube Marketing",
  "WhatsApp Marketing",
  "Email Marketing",
  "Google Business Listing",
];

/* neumorphic tokens for bg #ECF0F3 */
const RAISED = "shadow-[9px_9px_16px_#d1d9e6,-9px_-9px_16px_#ffffff]";
const RAISED_SM = "shadow-[5px_5px_10px_#d1d9e6,-5px_-5px_10px_#ffffff]";
const INSET = "shadow-[inset_6px_6px_10px_#d1d9e6,inset_-6px_-6px_10px_#ffffff]";

const field =
  `w-full bg-[#ECF0F3] text-[#212428] placeholder:text-gray-400 text-sm rounded-xl px-5 py-3.5 outline-none ` +
  `${INSET} transition focus:ring-2 focus:ring-red-600/50`;

const initialForm = { name: "", email: "", phone: "", service: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: send `form` to your API / email service here
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(initialForm);
    }, 3000);
  };

  const info = [
    { icon: FaPhoneAlt, label: "Call me", value: PHONE, href: PHONE_HREF },
    { icon: FaWhatsapp, label: "WhatsApp", value: "Chat on WhatsApp", href: WHATSAPP_HREF, external: true },
    { icon: FaEnvelope, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: FaMapMarkerAlt, label: "Location", value: LOCATION },
  ];

  return (
    <section id="contact" className="bg-[#ECF0F3] py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#212428] leading-tight">
            Let&apos;s talk about your next project
          </h2>
          <p className="mt-3 text-gray-500 text-base">
            Tell me what you want to grow. I&apos;ll reply within 24 hours with ideas and a plan.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Left: contact details */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {info.map(({ icon: Icon, label, value, href, external }) => {
              const body = (
                <>
                  <span
                    className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-red-600 ${INSET} transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-none`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-gray-400">{label}</span>
                    <span className="block text-[15px] font-semibold text-[#212428] break-words">
                      {value}
                    </span>
                  </span>
                </>
              );
              const cls = `group flex items-center gap-4 rounded-2xl bg-[#ECF0F3] p-4 ${RAISED_SM} transition-transform duration-300 ${href ? "hover:-translate-y-0.5" : ""}`;
              return href ? (
                <a
                  key={label}
                  href={href}
                  className={cls}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {body}
                </a>
              ) : (
                <div key={label} className={cls}>{body}</div>
              );
            })}

            <div className="flex items-center gap-3 pt-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-11 h-11 rounded-full bg-[#ECF0F3] text-[#212428] flex items-center justify-center ${RAISED_SM} transition-colors duration-300 hover:bg-red-600 hover:text-white hover:shadow-none`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className={`lg:col-span-3 rounded-3xl bg-[#ECF0F3] z-10 p-6 sm:p-9 ${RAISED}`}>
            {sent ? (
              <div className="min-h-[380px] flex flex-col items-center justify-center text-center">
                <span className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl shadow-[0_10px_24px_rgba(220,38,38,0.35)]">
                  ✓
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#212428]">Message sent</h3>
                <p className="mt-1 text-sm text-gray-500">Thanks! I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="block mb-2 text-sm font-medium text-[#212428]">Name</label>
                  <input id="c-name" name="name" value={form.name} onChange={onChange}
                    placeholder="Your name" required autoComplete="name" className={field} />
                </div>
                <div>
                  <label htmlFor="c-email" className="block mb-2 text-sm font-medium text-[#212428]">Email</label>
                  <input id="c-email" type="email" name="email" value={form.email} onChange={onChange}
                    placeholder="you@example.com" required autoComplete="email" className={field} />
                </div>
                <div>
                  <label htmlFor="c-phone" className="block mb-2 text-sm font-medium text-[#212428]">Phone</label>
                  <input id="c-phone" type="tel" name="phone" value={form.phone} onChange={onChange}
                    placeholder="+91" required autoComplete="tel" className={field} />
                </div>
                <div>
                  <label htmlFor="c-service" className="block mb-2 text-sm font-medium text-[#212428]">Service</label>
                  <select id="c-service" name="service" value={form.service} onChange={onChange} required
                    className={`${field} ${form.service ? "" : "text-gray-400"}`}>
                    <option value="" disabled>Choose a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="text-[#212428]">{s}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="c-message" className="block mb-2 text-sm font-medium text-[#212428]">Project details</label>
                  <textarea id="c-message" name="message" value={form.message} onChange={onChange}
                    placeholder="What are you working on, and what result do you want?"
                    rows={5} required className={`${field} resize-none`} />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 bg-red-600 text-white font-semibold text-sm rounded-full px-8 py-3.5 shadow-[0_10px_24px_rgba(220,38,38,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(220,38,38,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    <FaPaperPlane size={13} /> Send message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}