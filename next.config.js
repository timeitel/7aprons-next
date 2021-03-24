export const basePath =
  process.env.NODE_ENV === "production" ? "/7aprons-next" : "";

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`,
};
