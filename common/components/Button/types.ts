import { themeDark } from "@styles/theme";
import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  size?: keyof IButtonSizes;
  variant?: keyof IButtonVariants;
  disableHover?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  href?: string;
  fullWidth?: boolean;
}

interface IButtonSizes {
  sm: CSSProperties;
  md: CSSProperties;
  lg: CSSProperties;
}

export const ButtonSizes: IButtonSizes = {
  sm: {
    padding: "4px 10px",
    fontSize: "0.9375rem",
  },
  md: { padding: "6px 16px", fontSize: "1rem" },
  lg: { padding: "8px 22px", fontSize: "1.0625rem" },
};

type IButtonVariants = {
  text: CSSProperties;
  contained: CSSProperties;
  outlined: CSSProperties;
};

export const ButtonVariants: IButtonVariants = {
  text: {},
  contained: { backgroundColor: themeDark.color.blue200 },
  outlined: { border: "1px solid" },
};
