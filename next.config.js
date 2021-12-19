const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "avatars.dicebear.com",
      "res.cloudinary.com",
    ],
  },
});
