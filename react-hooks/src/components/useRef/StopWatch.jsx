import { useState, useRef } from "react";
import "./StopWatch.css";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalId = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);

      intervalId.current = setInterval(() => {
        setTimer((prevTime = 0) => {
          if (prevTime === 10) {
            return 0;
          }
          return prevTime + 1;
        });
      }, 1000);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalId?.current ?? null);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalId?.current ?? null);
    setTimer(0);
  };

  return (
    <>
      <div className="stopwatch-card">
        <h1 className="timer">Timer: {timer ?? 0}</h1>

        <h3 className="comment">
          {timer === 10 ? "Time Up!" : timer > 5 ? "Hurry Up!" : ""}
        </h3>

        <div className="button-group">
          <button onClick={handleStart} className="btn-1">
            Start
          </button>
          <button onClick={handleStop} className="btn-2">
            Stop
          </button>
          <button onClick={handleReset} className="btn-3">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
