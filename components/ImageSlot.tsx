import Image from "next/image";
import { ImageIcon } from "lucide-react";

type ImageSlotProps = {
  placeholder: string;
  src?: string;
  shape?: "rect" | "circle";
  className?: string;
  priority?: boolean;
};

export default function ImageSlot({
  placeholder,
  src,
  shape = "rect",
  className = "",
  priority = false,
}: ImageSlotProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={placeholder}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
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
      <ImageIcon className="h-6 w-6 text-ink-soft/60" aria-hidden />
      <span className="text-xs leading-tight text-ink-soft/80">
        {placeholder}
      </span>
    </div>
  );
}
