import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import CircularProgressBar from './CircularProgressBar';
export default function Pomodoro() {
  const [percentage, setPercentage] = useState(14);
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  const [toStartTime, setToStartTime] = useState(30);
  const [startTime, setStartTime] = useState(30);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  if (startTime - count <= 0) {
    clearInterval(timerIdRef.current);
  }

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  const handleChange = (e) => {
    setToStartTime(e.target.value);
  };
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  const resetHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    setCount(0);
  };

  function padStartWith0(number, length) {
    return number.toString().padStart(length, '0');
  }

  const currentTime = (timer) => {
    const min = Math.floor(timer / 60);
    const sec = Math.floor(timer % 60);

    return `${padStartWith0(min, 2)}:${padStartWith0(sec, 2)}`;
  };

  const handleChangeEvent = (e) => {
    setPercentage(e.target.value);
  };

  useEffect(() => {
    setPercentage(((startTime - count) * 100) / startTime);
  }, [count, startTime]);

  return (
    <div>
      <div>wefwefwefwef</div>
      <div>Timer: {startTime - count}s</div>
      <div>Current Time: {currentTime(startTime - count)}</div>
      <div>Start Time: {startTime}</div>
      <div>Percentage: {((startTime - count) * 100) / startTime}</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
        <button onClick={resetHandler}>Reset</button>
        <input onChange={handleChange}></input>
        <button onClick={() => setStartTime(toStartTime)}>
          Set Start Time
        </button>
        <Container>
          <CircularProgressBar
            strokeWidth={10}
            squareSize={200}
            percentage={100 - percentage}
            time={currentTime(startTime - count)}
          />
          <input
            id="progressInput"
            type="range"
            min="0"
            max="100"
            step="1"
            value={percentage}
            onChange={handleChangeEvent}
          />
        </Container>
      </div>
    </div>
  );
}

const Container = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
