/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "../mhs_poc_server/public",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
