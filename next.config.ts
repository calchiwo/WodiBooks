module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://wodiwaitlist.vercel.app",
        permanent: false,
      },
    ];
  },
};
