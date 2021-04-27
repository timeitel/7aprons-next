import { Button } from "@components/common/Button";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Stats = ({ nextStep, previousStep, totalSteps, step }) => (
  <Container>
    <hr />
    {step > 1 && <Button onClick={previousStep}>Previous</Button>}
    {step < totalSteps ? (
      <Button onClick={nextStep}>Review + pay</Button>
    ) : (
      <Button onClick={nextStep}>Confirm payment</Button>
    )}
  </Container>
);
