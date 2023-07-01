/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'openweathermap.org'
    ]
  },
  output: 'export',
}

module.exports = nextConfig;
