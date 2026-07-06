module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://wodiwaitlist.netlify.app",
        permanent: false,
      },
    ];
  },
};
