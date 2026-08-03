import { Link } from "@tanstack/react-router";
import logo from "@/assets/migenia-logo.png.asset.json";

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <Link to="/" aria-label="MiGenIA — inicio" className="inline-flex items-center">
      <img
        src={logo.url}
        alt="MiGenIA"
        className={`${className} w-auto object-contain`}
        width={190}
        height={40}
      />
    </Link>
  );
}
