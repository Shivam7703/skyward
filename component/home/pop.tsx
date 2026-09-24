"use client";
import React, { useEffect, useRef, useState, ChangeEvent, FormEvent } from 'react';
import { usePathname } from 'next/navigation';
import {
  FaWhatsapp, FaTimes, FaPhoneAlt, FaEnvelope,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter,
  FaBullhorn, FaChartLine, FaSearch, FaHeart,
} from 'react-icons/fa';

const WHATSAPP_NUMBER = '919560884740';
const WHATSAPP_MESSAGE = "Hi Pranav! I'd like to know more about your Services.";
const PHONE = '+919560884740';
const EMAIL = 'pranavex430@gmail.com'; 

const SOCIALS = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
];

const PROJECT_TYPES = [
  'SEO', 'Social Media Marketing', 'Performance Ads (Google / Meta)',
  'Website Design & Development', 'Branding & Content', 'Other',
];

const initialForm = { name: '', email: '', phone: '', projectType: '', message: '' };

const inputCls =
  'w-full bg-white text-[#212428] placeholder:text-gray-400 text-sm rounded-xl px-4 py-3 ' +
  'border border-transparent shadow-[0_2px_12px_rgba(33,36,40,0.06)] outline-none transition ' +
  'focus:border-red-600 focus:shadow-[0_4px_18px_rgba(255,1,79,0.18)]';

export default function Popups() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);
  const pathname = usePathname();

  // ---- 3D cube mouse interaction ----
  const tiltRef = useRef<HTMLDivElement>(null);
  const [burst, setBurst] = useState(0);
  const m = useRef({
    tx: 0, ty: 0, x: 0, y: 0,      // hover tilt (target / current)
    rx: 0, ry: 0, vx: 0, vy: 0,    // drag rotation + inertia
    dragging: false, moved: 0, lastX: 0, lastY: 0,
  });

  useEffect(() => {
    if (!isFormOpen) return;
    let raf = 0;
    const loop = () => {
      const s = m.current;
      s.x += (s.tx - s.x) * 0.08;
      s.y += (s.ty - s.y) * 0.08;
      if (!s.dragging) {
        s.rx += s.vx; s.ry += s.vy;
        s.vx *= 0.94; s.vy *= 0.94;
      }
      if (tiltRef.current) {
        tiltRef.current.style.transform = `rotateX(${s.x + s.rx}deg) rotateY(${s.y + s.ry}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [isFormOpen]);

  const onPanelMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = m.current;
    if (s.dragging) {
      const dx = e.clientX - s.lastX;
      const dy = e.clientY - s.lastY;
      s.lastX = e.clientX; s.lastY = e.clientY;
      s.moved += Math.abs(dx) + Math.abs(dy);
      s.ry += dx * 0.6; s.rx -= dy * 0.6;
      s.vy = dx * 0.6; s.vx = -dy * 0.6;
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    s.tx = ((e.clientY - r.top) / r.height - 0.5) * -30;
    s.ty = ((e.clientX - r.left) / r.width - 0.5) * 40;
  };
  const onPanelLeave = () => { m.current.tx = 0; m.current.ty = 0; };
  const onCubeDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const s = m.current;
    s.dragging = true; s.moved = 0; s.vx = 0; s.vy = 0;
    s.lastX = e.clientX; s.lastY = e.clientY;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onCubeUp = () => {
    const s = m.current;
    s.dragging = false;
    if (s.moved < 5) {            // simple click -> spin boost + core flash
      s.vy += 16;
      setBurst((b) => b + 1);
    }
  };
  const onCubeCancel = () => { m.current.dragging = false; };

  useEffect(() => {
    // Route change par close, 5 sec baad wapas open
    setIsFormOpen(false);
    const t = setTimeout(() => setIsFormOpen(true), 5000);
    return () => clearTimeout(t);
  }, [pathname]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormOpen(false);
      setForm(initialForm);
    }, 2200);
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const faces = [
    { Icon: FaBullhorn, cls: 'ww-front' },
    { Icon: FaChartLine, cls: 'ww-back' },
    { Icon: FaSearch, cls: 'ww-right' },
    { Icon: FaHeart, cls: 'ww-left' },
    { Icon: FaWhatsapp, cls: 'ww-top' },
    { Icon: FaEnvelope, cls: 'ww-bottom' },
  ];

  return (
    <div>
      <style>{`
        .ww-stage { perspective: 900px; }
        .ww-tilt {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          transform-style: preserve-3d; will-change: transform;
        }
        .ww-scene { width: 150px; height: 150px; cursor: grab; touch-action: none; user-select: none; }
        .ww-scene:active { cursor: grabbing; }
        @media (max-width: 767px) { .ww-tilt { scale: .68; } }
        .ww-burst { animation: ww-burst .7s ease-out 1, ww-pulse 3s ease-in-out .7s infinite; }
        @keyframes ww-burst {
          0%   { transform: scale(.8); box-shadow: 0 0 40px 10px rgba(255,1,79,.45); }
          40%  { transform: scale(2.6); box-shadow: 0 0 90px 40px rgba(255,1,79,.7); }
          100% { transform: scale(.8); box-shadow: 0 0 40px 10px rgba(255,1,79,.45); }
        }
        .ww-cube {
          position: relative; width: 100%; height: 100%;
          transform-style: preserve-3d;
          animation: ww-spin 16s linear infinite;
        }
        .ww-face {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, rgba(255,1,79,.16), rgba(255,255,255,.55));
          border: 1.5px solid #E7000B; border-radius: 14px;
          color: #E7000B; font-size: 40px;
          backdrop-filter: blur(2px);
          box-shadow: inset 0 0 24px rgba(255,1,79,.18);
        }
        .ww-front  { transform: translateZ(75px); }
        .ww-back   { transform: rotateY(180deg) translateZ(75px); }
        .ww-right  { transform: rotateY(90deg)  translateZ(75px); }
        .ww-left   { transform: rotateY(-90deg) translateZ(75px); }
        .ww-top    { transform: rotateX(90deg)  translateZ(75px); }
        .ww-bottom { transform: rotateX(-90deg) translateZ(75px); }
        .ww-core {
          position: absolute; top: 50%; left: 50%; width: 46px; height: 46px; margin: -23px 0 0 -23px;
          background: #E7000B; border-radius: 12px; transform-style: preserve-3d;
          box-shadow: 0 0 40px 10px rgba(255,1,79,.45);
          animation: ww-pulse 3s ease-in-out infinite;
        }
        @keyframes ww-spin {
          from { transform: rotateX(-20deg) rotateY(0deg); }
          to   { transform: rotateX(340deg) rotateY(360deg); }
        }
        @keyframes ww-pulse { 0%,100% { transform: scale(.8); } 50% { transform: scale(1.15); } }

        .ww-ring {
          position: absolute; top: 50%; left: 50%; border-radius: 9999px;
          border: 1.5px dashed rgba(255,1,79,.45);
        }
        .ww-ring-1 { width: 230px; height: 230px; margin: -115px 0 0 -115px; animation: ww-orbit1 12s linear infinite; }
        .ww-ring-2 { width: 270px; height: 270px; margin: -135px 0 0 -135px; border-style: solid; border-color: rgba(33,36,40,.12); animation: ww-orbit2 18s linear infinite; }
        .ww-dot { position: absolute; top: -6px; left: 50%; width: 12px; height: 12px; margin-left: -6px; border-radius: 9999px; background: #E7000B; box-shadow: 0 0 12px #E7000B; }
        @keyframes ww-orbit1 { from { transform: rotateX(70deg) rotateZ(0deg); } to { transform: rotateX(70deg) rotateZ(360deg); } }
        @keyframes ww-orbit2 { from { transform: rotateX(70deg) rotateY(25deg) rotateZ(360deg); } to { transform: rotateX(70deg) rotateY(25deg) rotateZ(0deg); } }

        @media (prefers-reduced-motion: reduce) {
          .ww-cube, .ww-core, .ww-ring-1, .ww-ring-2 { animation: none; }
          .ww-cube { transform: rotateX(-25deg) rotateY(35deg); }
        }
      `}</style>

      {/* WhatsApp floating button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-2 sm:w-16 sm:h-16 w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1ebd5a] text-white flex items-center justify-center shadow-lg hover:shadow-[0_8px_24px_rgba(37,211,102,0.55)] transition-all z-40"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Side tab trigger */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="fixed top-1/2 -right-8 -translate-y-1/2 -rotate-90 origin-center bg-red-600 text-white font-semibold text-base tracking-wide px-5 py-2 rounded-t-lg flex items-center gap-2 z-40 transition-all"
      >
        Hire Me
      </button>

      {/* Popup Overlay */}
      {isFormOpen && (
        <div
          onClick={() => setIsFormOpen(false)}
          className="fixed inset-0 bg-[#212428]/60 backdrop-blur-sm flex items-center justify-center z-[70] p-5"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Hire me"
            className="bg-[#f6f6f6] w-full max-w-4xl rounded-2xl overflow-y-auto max-h-[92vh] shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side */}
            <div
              onPointerMove={onPanelMove}
              onPointerLeave={onPanelLeave}
              className="w-full md:w-[42%] shrink-0 relative overflow-hidden bg-gradient-to-br from-white via-[#fff1f5] to-[#ffdbe6] p-7 max-md:p-3 flex flex-col items-center text-center"
            >
              <div className="ww-stage relative flex-1 w-full min-h-[200px] md:min-h-[280px]">
                <div ref={tiltRef} className="ww-tilt">
                  <div className="ww-ring ww-ring-2" style={{ transformStyle: 'preserve-3d' }}>
                    <span className="ww-dot" />
                  </div>
                  <div className="ww-ring ww-ring-1" style={{ transformStyle: 'preserve-3d' }}>
                    <span className="ww-dot" />
                  </div>
                  <div
                    className="ww-scene"
                    style={{ transformStyle: 'preserve-3d' }}
                    onPointerDown={onCubeDown}
                    onPointerUp={onCubeUp}
                    onPointerCancel={onCubeCancel}
                  >
                    <div className="ww-cube">
                      <div key={burst} className={`ww-core ${burst ? 'ww-burst' : ''}`} />
                      {faces.map(({ Icon, cls }) => (
                        <div key={cls} className={`ww-face ${cls}`}>
                          <Icon />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 mb-3 max-md:mb-1">Drag to rotate, click to spin</p>

              <h3 className="text-2xl font-bold text-[#212428] leading-snug ">
                Let&apos;s grow your brand online
              </h3>
            
              <div className="flex gap-2 mt-5 w-full ">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-semibold rounded-full py-2.5 hover:brightness-95 transition"
                >
                  <FaWhatsapp size={15} /> WhatsApp
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white text-xs font-semibold rounded-full py-2.5 hover:brightness-95 transition"
                >
                  <FaPhoneAlt size={12} /> Call Now
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#212428] text-white text-xs font-semibold rounded-full py-2.5 hover:brightness-125 transition"
                >
                  <FaEnvelope size={13} /> Mail
                </a>
              </div>

              <div className="flex gap-3 mt-5">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white text-[#212428] flex items-center justify-center shadow-[0_2px_12px_rgba(33,36,40,0.1)] hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-[58%] p-8  max-md:hidden">
              <button
                onClick={() => setIsFormOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors"
              >
                <FaTimes size={20} />
              </button>

              {submitted ? (
                <div className="h-full min-h-[360px] flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl mb-4">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-[#212428]">Request sent</h4>
                  <p className="text-sm text-gray-500 mt-1">We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#212428]">Hire me</h3>
                    <p className="text-sm text-gray-500 mt-1">Share a few details and we&apos;ll reply within 24 hours.</p>
                  </div>

                  <input
                    name="name" value={form.name} onChange={handleChange}
                    placeholder="Your name" required className={inputCls} autoComplete="name"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="Email address" required className={inputCls} autoComplete="email"
                    />
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="Phone number" required className={inputCls} autoComplete="tel"
                    />
                  </div>
                  <select
                    name="projectType" value={form.projectType} onChange={handleChange}
                    required className={`${inputCls} ${form.projectType ? '' : 'text-gray-400'}`}
                  >
                    <option value="" disabled>Project type</option>
                    {PROJECT_TYPES.map((p) => (
                      <option key={p} value={p} className="text-[#212428]">{p}</option>
                    ))}
                  </select>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Describe your project" rows={4} required
                    className={`${inputCls} resize-none`}
                  />

                  <button
                    type="submit"
                    className="self-start bg-red-600 text-white font-semibold text-sm rounded-full px-8 py-3 shadow-[0_8px_24px_rgba(255,1,79,0.35)] hover:shadow-[0_10px_28px_rgba(255,1,79,0.5)] hover:-translate-y-0.5 transition-all"
                  >
                    Hire me
                  </button>
                </form>
              )}
                <p className="text-sm text-gray-800 mt-8">
                SEO, social media and ads that bring real customers. Tell us about your project.
              </p>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}