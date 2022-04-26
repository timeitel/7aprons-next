import { breakpoints, IBreakpointFns } from "@styles/theme";
import { IColors, themeDarkColors } from "./colors";
import { IShadows, shadows } from "./shadows";
import { ISpacing, spacing } from "./spacing";

export interface ITheme {
  color: IColors;
  breakpoints: IBreakpointFns;
  spacing: ISpacing;
  shadow: IShadows;
}

export const themeDark: ITheme = {
  color: themeDarkColors,
  breakpoints: breakpoints,
  spacing: spacing,
  shadow: shadows,
};
