
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
    xl: "h-24",
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className={cn("relative", sizes[size])}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-magicmoon-purple to-magicmoon-magenta opacity-30 blur-md animate-pulse-slow" />
        <div className="relative flex items-center justify-center h-full aspect-square rounded-full border border-magicmoon-purple bg-black">
          <div className="absolute inset-1 rounded-full border border-magicmoon-purple/30" />
          <div className="text-gradient font-artistic font-bold">
            {size === "sm" && <span className="text-xl">M</span>}
            {size === "md" && <span className="text-3xl">MM</span>}
            {size === "lg" && <span className="text-4xl">MM</span>}
            {size === "xl" && <span className="text-5xl">MM</span>}
          </div>
        </div>
      </div>
      <div className="mt-2 font-artistic">
        <span className="text-gradient font-bold">MagicMoon</span>
        <span className="text-white"> Tattoo</span>
      </div>
    </div>
  );
};

export default Logo;
