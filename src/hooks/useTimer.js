import  { useEffect, useState } from 'react'

export const useTimer = () => {
  const [time, setTime] = useState(60);
  const [value, setValue] = useState(1);
  const [timer,setTimer] =useState(false)




  const getInputValue=(e)=>{
   const newInput=e.target.value;
    setValue(newInput);
    setTime(newInput*time)
  }

  useEffect(() => {
  
    if(time>0 && timer){
      setTimeout(setTime,1000,time-1)
    }else{
      setTimer(false)
    }

    //  const id = setInterval(() => {
          
  //          setTime((prev) => prev 
  //          - 1)
      
  //}, 1000);

  //  return () => clearInterval(id);
  }, [time, timer]);

  return {
    time,
    setTime,
    timer,
    setTimer,
    value,
    getInputValue,

  }
}

