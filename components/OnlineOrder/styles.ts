import styled from "styled-components";

export const WeeksContainer = styled.div`
  max-height: 40vh;
  overflow-y: scroll;
  padding-right: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  input {
    border: 1px solid lightgray;
    border-radius: 4px;
    height: 40px;
    padding: 2px 8px;
  }

  select {
    border-radius: 4px;
    height: 40px;
    margin-bottom: 12px;
  }
`;
