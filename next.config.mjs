/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Activa el modo estricto de React para detectar problemas
  experimental: {
    appDir: true, // Asegúrate de que App Router esté activado si lo estás usando
  },
};

export default nextConfig;
