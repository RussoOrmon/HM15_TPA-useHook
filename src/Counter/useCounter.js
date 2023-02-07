import React from "react";
import { useState } from "react";


export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [inputLevel, setInputLevel] = useState(0);

  const increme = () => {
    setCount((prev) => prev + Number(inputLevel));
  };

  const decreme = () => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - Number(inputLevel);
      }
      return prev;
    });
  };

  const reset = () => {
    setCount(0);
    setInputLevel(0)
  };

  const getValueInput = (e) => {
    setInputLevel(e.target.value);
  };

  return {
    count,
    increme,
    decreme,
    reset,
    inputLevel,
    getValueInput,
  };
};
