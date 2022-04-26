import { buildMediaQuery, buildDeviceMediaQuery } from "@utils";

export interface IBreakpointFns {
  up: (min: BreakpointType) => string;
  down: (max: BreakpointType) => string;
  between: (min: BreakpointType, max: BreakpointType) => string;
  only: (deviceSize: BreakpointType) => string;
}

export const breakpoints: IBreakpointFns = {
  up: (min) => buildMediaQuery({ min }),
  down: (max) => buildMediaQuery({ max }),
  between: (min, max) => buildMediaQuery({ min, max }),
  only: (deviceSize) => buildDeviceMediaQuery(deviceSize),
};

export type BreakpointType = keyof IBreakpoints;
export interface IBreakpoints {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
  ultraWide: string;
}
export const breakpointSizes: IBreakpoints = {
  mobile: "0px",
  tablet: "600px",
  laptop: "900px",
  desktop: "1200px",
  ultraWide: "1536px",
};
