// import { withContentlayer } from "next-contentlayer";
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "development",
  swcMinify: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "weijunext.com",
      "smartexcel.cc",
      "texttosvg.cc",
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/zephyrwang6/TextToSvg",
        permanent: false,
      },
    ];
  },
};

// export default withContentlayer(nextConfig)
module.exports = withContentlayer(nextConfig);
