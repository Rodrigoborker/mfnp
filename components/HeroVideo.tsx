export default function HeroVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  return (
    <video
      className={`h-full w-full object-cover ${className}`}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
