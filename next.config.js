/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // distDir: 'build',
  images: {
    disableStaticImages: true,
    domains: ["moacube.s3.ap-northeast-2.amazonaws.com"],
  }
}

module.exports = nextConfig
