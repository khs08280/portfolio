/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  assetPrefix:
    process.env.STATE === "production"
      ? "https://khs08280.github.io/portfolio"
      : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
