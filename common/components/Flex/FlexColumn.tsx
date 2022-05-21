import { CSSProperties, FC } from "react";
import styled from "styled-components";

interface Props {
  style?: CSSProperties;
}

export const FlexColumn: FC<Props> = ({ children, style }) => {
  return <StyledFlex style={style}>{children}</StyledFlex>;
};

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
