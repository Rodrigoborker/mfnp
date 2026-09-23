import { ImageIcon } from "lucide-react";

type ImageSlotProps = {
  placeholder: string;
  shape?: "rect" | "circle";
  className?: string;
};

export default function ImageSlot({
  placeholder,
  shape = "rect",
  className = "",
}: ImageSlotProps) {
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
