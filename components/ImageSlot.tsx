import Image from "next/image";
import { ImageIcon } from "lucide-react";

type ImageSlotProps = {
  placeholder: string;
  src?: string;
  shape?: "rect" | "circle";
  className?: string;
  priority?: boolean;
  objectPosition?: string;
};

export default function ImageSlot({
  placeholder,
  src,
  shape = "rect",
  className = "",
  priority = false,
  objectPosition = "center",
}: ImageSlotProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={placeholder}
        fill
        priority={priority}
        sizes="100vw"
        style={{ objectPosition }}
        className={`object-cover ${
          shape === "circle" ? "rounded-full" : ""
        } ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-alt p-4 text-center ${
        shape === "circle" ? "rounded-full" : ""
      } ${className}`}
    >
      <ImageIcon className="h-6 w-6 text-white/50" aria-hidden />
      <span className="text-[17px] leading-tight text-white/70">
        {placeholder}
      </span>
    </div>
  );
}
