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
    ];
  },
  async redirects() {
    return [
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
