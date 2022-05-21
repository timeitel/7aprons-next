import { CSSProperties, FC } from "react";
import styled from "styled-components";

interface Props {
  style?: CSSProperties;
}

export const Flex: FC<Props> = ({ children, style }) => {
  return <StyledFlex style={style}>{children}</StyledFlex>;
};

export const StyledFlex = styled.div`
  display: flex;
`;
