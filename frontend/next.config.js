module.exports = {
  future: {
    webpack5: true,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_SESSION_ENDPOINT: process.env.NEXT_PUBLIC_SESSION_ENDPOINT,
  },
};
