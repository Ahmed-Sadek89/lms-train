import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // {
      //   source: "/ahmed",
      //   destination: "/category",
      //   permanent: false,
      // },
    ];
  },
};

export default nextConfig;
