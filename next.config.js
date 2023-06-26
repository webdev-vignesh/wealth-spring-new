/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env:{
      SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY
    }
}

module.exports = nextConfig
