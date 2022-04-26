import { BreakpointType, breakpointSizes } from "@styles/theme";
import { AtLeastOne } from "@types";

export type IBuildMediaQuery = AtLeastOne<{
  min: BreakpointType;
  max: BreakpointType;
}>;
export const buildMediaQuery = ({ min, max }: IBuildMediaQuery) => {
  if (min && max) {
    return `@media (min-width:${breakpointSizes[min]}) and (max-width:${breakpointSizes[max]})`;
  } else if (min) {
    return `@media (min-width:${breakpointSizes[min]})`;
  } else if (max) {
    return `@media (max-width:${breakpointSizes[max]})`;
  } else {
    throw Error("At least min or max required.");
  }
};

export const buildDeviceMediaQuery = (size: BreakpointType) => {
  switch (size) {
    case "mobile":
      return buildMediaQuery({ min: size, max: "tablet" });
    case "tablet":
      return buildMediaQuery({ min: size, max: "laptop" });
    case "laptop":
      return buildMediaQuery({ min: size, max: "desktop" });
    case "desktop":
      return buildMediaQuery({ min: size, max: "ultraWide" });
    case "ultraWide":
      return buildMediaQuery({ min: size });
    default:
      throw Error("Device size not supported.");
  }
};
