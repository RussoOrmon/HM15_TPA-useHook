import styled from "styled-components";
import { useTimer } from "./hooks/useTimer";

const Timer = () => {
  const { time, setTime, timer, setTimer, value, getInputValue } = useTimer();

  return (
    <Container>
      <h3>
        Timer:
        {time}
      </h3>
      <button onClick={() => setTimer(!timer)}>

        {timer ? "stop" : "start"}
      </button>
      <input type="number" value={value} onChange={getInputValue} />
      <button onClick={() => setTime(60)}> Reset </button>
    </Container>
  );
};

export default Timer;

const Container =styled.div`
    background-color: #febc6c;
    width: 400px;
    margin: 0 auto;
    padding-bottom: 10px ;



`