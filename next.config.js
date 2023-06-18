/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    REACT_APP_SYSTEM_EMAIL: process.env.REACT_APP_SYSTEM_EMAIL,
    REACT_APP_SYSTEM_PASSWORD: process.env.REACT_APP_SYSTEM_PASSWORD
  }
}

module.exports = nextConfig
