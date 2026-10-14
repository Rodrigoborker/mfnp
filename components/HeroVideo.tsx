export default function HeroVideo({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <video
      className={`h-full w-full object-cover ${className}`}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
