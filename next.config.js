const path = require('path');
require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {},
  publicRuntimeConfig: {},
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["localhost", "res.cloudinary.com"],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src/');
    return config;
  },
};
