/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/McXTyH1/junkfree-circle.png",
      },
      {
        protocol: "https",
        hostname: "junkfree-backend.onrender.com",
        port: "",
        pathname: "/media/item_images/**",
      },
    ],
  },
};

export default nextConfig;
