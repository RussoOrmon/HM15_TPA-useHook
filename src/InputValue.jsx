import React from "react";
import styled from "styled-components";
import useInput from "./hooks/useInput";

const InputValue = () => {
  const { input, getInputValue } = useInput();
  console.log("🚀 ~ input", typeof input)

  return (
    <Container>
      <h4> Input</h4>
      <input type='primary' value={input} onChange={getInputValue} />
      {/*<input type='email' value={input} onChange={getInputValue} />
      <input type='password' value={input} onChange={getInputValue} />*/}
      <input type='date' value={input} onChange={getInputValue} />
      <p> {input}  </p>
    </Container>
  );
};

export default InputValue;

const Container = styled.form`
  background-color: #052ca3;
  width: 300px;
  margin: 0 auto;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;


