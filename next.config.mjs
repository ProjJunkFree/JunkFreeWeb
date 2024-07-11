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
        pathname: "/media/junk/**",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
