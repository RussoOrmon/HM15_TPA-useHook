import React, { useState } from 'react'

const useInput = () => {

    const [input, setInput] = useState();

    

    const getInputValue=(e)=>{
        setInput(e.target.value)
    }


  return {
    input,
    getInputValue,
  }
}

export default useInput