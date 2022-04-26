export type ISpacing = (...spaces: (number | "auto")[]) => string;

export const spacing: ISpacing = (...spaces) => {
  const spacing = spaces.reduce((acc, s) => {
    const newSpace = s === "auto" ? "auto" : `${s}rem`;
    return `${acc} ${newSpace}`;
  }, "");
  return spacing.trim();
};
