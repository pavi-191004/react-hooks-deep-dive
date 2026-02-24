import { useState, useRef } from "react";
import "./StopWatch.css";
const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalId = useRef(null);
  console.log(intervalId);
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);

      intervalId.current = setInterval(function () {
        console.log("running");

        setTimer((prevTime) => {
          if (prevTime === 10) {
            return 0;
          } else {
            return prevTime + 1;
          }
        });
      }, 1000);
    }
  };
  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalId.current);
  };
  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalId.current);
    setTimer(0);
  };

  return (
    <>
      <div className="stopwatch-card">
        <h1 className="timer"> Timer: {timer}</h1>
        <h3 className="comment">
          {timer === 10 ? "Time Up!" : timer > 5 ? "Hurry Up!" : ""}
        </h3>

        {/* intervalID: {intervalId.current} */}
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
