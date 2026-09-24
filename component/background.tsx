"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaShareAlt, FaSearch, FaAd, FaPenNib, FaLaptopCode, FaServer,
  FaCamera, FaYoutube, FaWhatsapp, FaEnvelope, FaMapMarkerAlt,
  FaInstagram, FaFacebookF, FaLinkedinIn,
} from "react-icons/fa";

type Variant = "soft" | "red";

/* Page bg is #ECF0F3 (neumorphic). "soft" cubes are built from its light/shadow
   tones (#ffffff / #d1d9e6), "red" cubes from red-600. No black, no transparency. */
const g = (a: string, b: string) => `linear-gradient(135deg, ${a}, ${b})`;

const SOFT = [
  g("#ffffff", "#dfe5ee"), // front
  g("#d5dce8", "#bcc6d6"), // back
  g("#e6ebf2", "#c9d2e0"), // right
  g("#dde3ed", "#c2ccdb"), // left
  g("#ffffff", "#eef2f7"), // top
  g("#cbd4e2", "#b3bfd1"), // bottom
];
const RED = [
  g("#f04848", "#dc2626"), // front  (red-600 base)
  g("#b91c1c", "#991b1b"), // back
  g("#e23636", "#c81e1e"), // right
  g("#c62828", "#a61b1b"), // left
  g("#f87171", "#ef4444"), // top
  g("#a31919", "#7f1d1d"), // bottom
];

/* each face: placement only (icon comes from the cube's own list) */
const FACES: { place: (h: number) => string }[] = [
  { place: (h) => `translateZ(${h}px)` },
  { place: (h) => `translateZ(-${h}px) rotateY(180deg)` },
  { place: (h) => `rotateY(90deg) translateZ(${h}px)` },
  { place: (h) => `rotateY(-90deg) translateZ(${h}px)` },
  { place: (h) => `rotateX(90deg) translateZ(${h}px)` },
  { place: (h) => `rotateX(-90deg) translateZ(${h}px)` },
];

/* service icons + social icons, mixed so every cube gets a few socials */
const SERVICE_ICONS: React.ElementType[] = [
  FaShareAlt,     // Social Media Marketing
  FaInstagram,    // Instagram
  FaSearch,       // Search Engine Optimization
  FaAd,           // Paid Ads
  FaFacebookF,    // Facebook
  FaPenNib,       // Content Creation
  FaLaptopCode,   // Web Design & Development
  FaServer,       // Hosting & Domain
  FaLinkedinIn,   // LinkedIn
  FaCamera,       // Videoshoots & Photoshoots
  FaYoutube,      // YouTube Marketing
  FaWhatsapp,     // WhatsApp Marketing
  FaEnvelope,     // Email Marketing
  FaMapMarkerAlt, // Google Business Listing
];

/* base look, and what it turns into on hover (soft <-> red) */
const VARIANTS: Record<
  Variant,
  { base: string[]; hover: string[]; face: string; icon: string; well: string }
> = {
  soft: {
    base: SOFT,
    hover: RED,
    face: "border-white group-hover:border-red-400",
    icon: "text-red-600 group-hover:text-white",
    well: "shadow-[inset_4px_4px_8px_#c5cedd,inset_-4px_-4px_8px_#ffffff] group-hover:shadow-[inset_3px_3px_7px_#b91c1c,inset_-3px_-3px_7px_#f05252]",
  },
  red: {
    base: RED,
    hover: SOFT,
    face: "border-red-400 group-hover:border-white",
    icon: "text-white group-hover:text-red-600",
    well: "shadow-[inset_3px_3px_7px_#b91c1c,inset_-3px_-3px_7px_#f05252] group-hover:shadow-[inset_4px_4px_8px_#c5cedd,inset_-4px_-4px_8px_#ffffff]",
  },
};

/* ---------------- Real 3D Cube (6 faces) ---------------- */
function Cube3D({
  size, duration, dirX, dirY, startX, startY, variant, icons,
}: {
  size: number; duration: number; dirX: number; dirY: number;
  startX: number; startY: number; variant: Variant; icons: React.ElementType[];
}) {
  const half = size / 2;
  const v = VARIANTS[variant];
  const reduced = useReducedMotion();

  return (
    <div
      className="group relative w-full h-full [filter:drop-shadow(10px_14px_14px_rgba(163,177,198,0.7))_drop-shadow(-8px_-8px_12px_#ffffff)] max-sm:[filter:drop-shadow(6px_8px_8px_rgba(163,177,198,0.7))]"
      style={{ perspective: 900 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateX: startX, rotateY: startY }}
        animate={{
          rotateX: startX + (reduced ? 0 : 360 * dirX),
          rotateY: startY + (reduced ? 0 : 360 * dirY),
        }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        whileHover={{ scale: 1.12 }}
      >
        {FACES.map(({ place }, i) => {
          const Icon = icons[i];
          return (
          <div
            key={i}
            className={`absolute inset-0 flex items-center justify-center overflow-hidden border-[1.5px] [backface-visibility:hidden] transition-colors duration-300 ${v.face}`}
            style={{ transform: place(half), background: v.base[i] }}
          >
            {/* hover fill (swaps soft <-> red) */}
            <span
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: v.hover[i] }}
            />
            {/* pressed icon well */}
            <span
              className={`relative flex items-center justify-center rounded-full transition-shadow duration-300 ${v.well}`}
              style={{ width: "56%", height: "56%" }}
            >
              <Icon
                className={`transition-colors duration-300 ${v.icon}`}
                style={{ fontSize: size * 0.24 }}
              />
            </span>
          </div>
        );
        })}
      </motion.div>
    </div>
  );
}

/* ---------------- Bouncing wrapper for one cube ---------------- */
function BouncingCube({
  refCallback, ...cube
}: {
  refCallback: (el: HTMLDivElement | null) => void;
  size: number; duration: number; dirX: number; dirY: number;
  startX: number; startY: number; variant: Variant; icons: React.ElementType[];
}) {
  return (
    <div
      ref={refCallback}
      className="absolute top-0 left-0 pointer-events-auto cursor-pointer"
      style={{ width: cube.size, height: cube.size, willChange: "transform" }}
    >
      <Cube3D {...cube} />
    </div>
  );
}

const CUBE_COUNT = 9; // 5 soft (white) + 2 red
const BASE_SIZE = 86;
const SPEED = 1.4;

/* phone: 65%, tablet: 85%, desktop: full (always 7 cubes) */
function getLayout(width: number) {
  if (width < 640) return { scale: 0.65, count: CUBE_COUNT };
  if (width < 1024) return { scale: 0.85, count: CUBE_COUNT };
  return { scale: 1, count: CUBE_COUNT };
}

export default function BouncingCubesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = useReducedMotion();

  // null until mounted -> no random values in SSR markup, no hydration mismatch
  const [layout, setLayout] = useState<{ scale: number; count: number } | null>(null);
  const layoutRef = useRef({ scale: 1, count: CUBE_COUNT });

  const cubes = useRef<
    {
      x: number; y: number; vx: number; vy: number; base: number;
      duration: number; dirX: number; dirY: number; startX: number; startY: number;
      variant: Variant; icons: React.ElementType[]; angle: number;
    }[]
  >([]);

  if (cubes.current.length === 0) {
    cubes.current = Array.from({ length: CUBE_COUNT }).map((_, i) => {
      // evenly spread outward directions (small jitter) so cubes do not start inside each other
      const angle = (Math.PI * 2 * i) / CUBE_COUNT + (Math.random() - 0.5) * 0.4;
      return {
        angle,
        x: NaN, // placed around the container center on first frame
        y: NaN,
        vx: Math.cos(angle) * SPEED,
        vy: Math.sin(angle) * SPEED,
        base: BASE_SIZE * (0.85 + Math.random() * 0.3), // ~71-97px
        duration: 12 + Math.random() * 14,
        dirX: Math.random() > 0.5 ? 1 : -1,
        dirY: Math.random() > 0.5 ? 1 : -1,
        startX: Math.random() * 360,
        startY: Math.random() * 360,
        variant: i === 2 || i === 5 ? "red" : "soft",
        icons: Array.from({ length: 6 }).map(
          (_, j) => SERVICE_ICONS[(i * 6 + j) % SERVICE_ICONS.length]
        ),
      };
    });
  }

  useEffect(() => {
    const update = () => {
      const l = getLayout(window.innerWidth);
      layoutRef.current = l;
      setLayout((prev) => (prev && prev.scale === l.scale ? prev : l));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!layout) return;
    let raf: number;

    const tick = () => {
      const container = containerRef.current;
      if (container) {
        const W = container.clientWidth || window.innerWidth;
        const H = container.clientHeight || document.documentElement.scrollHeight;
        const { scale, count } = layoutRef.current;
        const k = scale < 1 ? 0.7 : 1; // slower on small screens
        const list = cubes.current.slice(0, count);

        // 1) first frame: small ring around the center, then move
        list.forEach((c) => {
          const size = c.base * scale;
          if (Number.isNaN(c.x)) {
            const ring = 118 * scale;
            c.x = W / 2 + Math.cos(c.angle) * ring - size / 2;
            c.y = H / 2 + Math.sin(c.angle) * ring - size / 2;
          }
          if (!reduced) {
            c.x += c.vx * k;
            c.y += c.vy * k;
          }
        });

        // 2) cube <-> cube collisions (elastic, mass ~ size^2)
        if (!reduced) {
          for (let a = 0; a < list.length; a++) {
            for (let b = a + 1; b < list.length; b++) {
              const p = list[a];
              const q = list[b];
              const sp = p.base * scale;
              const sq = q.base * scale;
              const dx = q.x + sq / 2 - (p.x + sp / 2);
              const dy = q.y + sq / 2 - (p.y + sp / 2);
              const minD = ((sp + sq) / 2) * 1.1; // a bit of room for the rotating corners
              const d2 = dx * dx + dy * dy;
              if (d2 >= minD * minD || d2 === 0) continue;

              const d = Math.sqrt(d2);
              const nx = dx / d;
              const ny = dy / d;
              const mp = sp * sp;
              const mq = sq * sq;

              // push them apart so they never stick together
              const overlap = minD - d;
              p.x -= nx * overlap * (mq / (mp + mq));
              p.y -= ny * overlap * (mq / (mp + mq));
              q.x += nx * overlap * (mp / (mp + mq));
              q.y += ny * overlap * (mp / (mp + mq));

              // bounce, only if they are moving towards each other
              const rv = (q.vx - p.vx) * nx + (q.vy - p.vy) * ny;
              if (rv < 0) {
                const j = (-2 * rv) / (1 / mp + 1 / mq);
                p.vx -= (j / mp) * nx;
                p.vy -= (j / mp) * ny;
                q.vx += (j / mq) * nx;
                q.vy += (j / mq) * ny;
              }
            }
          }
        }

        // 3) walls + apply
        list.forEach((c, i) => {
          const node = nodesRef.current[i];
          if (!node) return;
          const size = c.base * scale;
          const maxX = Math.max(0, W - size);
          const maxY = Math.max(0, H - size);

          if (c.x <= 0) { c.x = 0; c.vx = Math.abs(c.vx); }
          else if (c.x >= maxX) { c.x = maxX; c.vx = -Math.abs(c.vx); }

          if (c.y <= 0) { c.y = 0; c.vy = Math.abs(c.vy); }
          else if (c.y >= maxY) { c.y = maxY; c.vy = -Math.abs(c.vy); }

          // keep speed in a comfortable range after collisions
          const sp = Math.hypot(c.vx, c.vy);
          const lo = SPEED * 0.7;
          const hi = SPEED * 1.6;
          if (sp > 0 && (sp < lo || sp > hi)) {
            const f = (sp < lo ? lo : hi) / sp;
            c.vx *= f;
            c.vy *= f;
          }

          node.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
        });
      }
      if (!reduced) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [layout, reduced]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    >
      {layout &&
        cubes.current.slice(0, layout.count).map((c, i) => (
          <BouncingCube
            key={i}
            size={c.base * layout.scale}
            duration={c.duration}
            dirX={c.dirX}
            dirY={c.dirY}
            startX={c.startX}
            startY={c.startY}
            variant={c.variant}
            icons={c.icons}
            refCallback={(el) => (nodesRef.current[i] = el)}
          />
        ))}
    </div>
  );
}