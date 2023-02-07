import React from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";

import { useCounter } from "./useCounter";

const Counter = () => {

    const { count, increme, decreme, reset, inputLevel, getValueInput} = useCounter();

    

      
  return (
    <Container>
        <Input type="number" value={inputLevel} onChange={getValueInput}  />
     <h3> Counter : {count}</h3>
      <ButtonPlus onClick={increme}> + </ButtonPlus>
      <Reset onClick={reset}> Reset </Reset>
      <ButtonMinus onClick={decreme}> - </ButtonMinus>
 

    </Container>
  );
};

export default Counter;
const Container=styled.div`
    background-color: #760276;
    width: 200px;
    height: 100px;
    padding: 20px;
    display: inline-block;
    color: white;
`

const Input=styled.input`
    width: 40px;
`
const ButtonPlus=styled.button`
    background-color: #09f809;
    color: white;
    border-radius: 5px;

`
const ButtonMinus=styled.button`
    background-color: #fb8150;
    color: white;
    border-radius: 5px;


`
const Reset=styled.button`
    background-color: #0d18f0;
    color: white;
    margin: 0 10px;
    border-radius: 5px;

`