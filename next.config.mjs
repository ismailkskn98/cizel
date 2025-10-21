import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "*/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "*/**",
      },
      {
        protocol: "http",
        hostname: "5.129.237.153",
        port: "3004",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
