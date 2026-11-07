import type { NextConfig } from "next";

const cache = [
  {
    key: "Cache-Control",
    value: "public, max-age=604800, stale-while-revalidate=2592000",
  },
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      { source: "/photos/:path*", headers: cache },
      { source: "/brand/:path*", headers: cache },
      { source: "/videos/:path*", headers: cache },
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // URLs do WordPress antigo que o Google ainda tenta rastrear (404/403).
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/pt", destination: "/", permanent: true },
      { source: "/pt/:path*", destination: "/:path*", permanent: true },
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/", permanent: true },
      { source: "/es", destination: "/", permanent: true },
      { source: "/es/:path*", destination: "/", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "meuflatnapraia.com.br" }],
        destination: "https://www.meuflatnapraia.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
