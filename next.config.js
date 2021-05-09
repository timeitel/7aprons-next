module.exports = {
  future: {
    webpack5: true,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
  },
};
