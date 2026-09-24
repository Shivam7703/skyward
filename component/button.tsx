import Link from "next/link";
import { ReactNode } from "react";

interface ButtonmainProps {
  href: string;
  text: string;
  icon?: ReactNode;
  dark?: boolean;
}

/* Main Wrapper Component */
function Buttonmain({ href, text, icon }: ButtonmainProps) {
  const isExternal =
    href.startsWith("tel:") ||
    href.startsWith("https:") ||
    href.startsWith("http:") ||
    href.startsWith("mailto:") ||
    href.startsWith("www.");

  if (isExternal) {
    return (
      <a href={href} className="w-max inline-block group/btn">
        <Button text11={text} icon={icon} />
      </a>
    );
  }

  return (
    <Link href={href} className="w-max inline-block">
      <Button text11={text} icon={icon} />
    </Link>
  );
}

export default Buttonmain;

/* ==========================================================================
   Primary Button UI (Pure Tailwind CSS)
   ========================================================================== */
function Button({ text11, icon }: { text11: string; icon?: ReactNode }) {
  return (
    <span
      className="
        inline-flex items-center justify-center gap-3 px-8 h-14 rounded-full bg-[#ECF0F3] text-zinc-800 font-bold tracking-wider uppercase text-xs shadow-[-4px_-4px_10px_rgba(255,255,255,0.8),4px_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.8),inset_4px_4px_8px_rgba(0,0,0,0.1)] hover:text-blue-600 transition-all
      "
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span className="relative z-10">{text11}</span>
    </span>
  );
}