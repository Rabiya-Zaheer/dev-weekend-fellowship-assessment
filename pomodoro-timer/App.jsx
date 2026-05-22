import { useState, useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const FOCUS_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  const [mode, setMode] = useState("focus"); // focus | break
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [history, setHistory] = useState([]);

  const intervalRef = useRef(null);

  // FORMAT TIME
  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  // START
  const start = () => {
    if (isRunning) return;

    setIsRunning(true);

    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
  };

  // PAUSE
  const pause = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  // RESET
  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setMode("focus");
    setTimeLeft(FOCUS_TIME);
  };

  // TIMER LOGIC
  useEffect(() => {
    if (timeLeft < 0) return;

    if (timeLeft === 0) {
      clearInterval(intervalRef.current);

      if (mode === "focus") {
        const now = new Date();

        const session = {
          time: now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          duration: "25:00",
        };

        setHistory((prev) => [...prev, session]);

        setMode("break");
        setTimeLeft(BREAK_TIME);
      } else {
        setMode("focus");
        setTimeLeft(FOCUS_TIME);
      }

      setIsRunning(false);
    }
  }, [timeLeft, mode]);

  // LOAD HISTORY
  useEffect(() => {
    const saved = localStorage.getItem("pomodoro-history");
    const savedDate = localStorage.getItem("pomodoro-date");
    const today = new Date().toDateString();

    if (savedDate !== today) {
      localStorage.setItem("pomodoro-date", today);
      localStorage.removeItem("pomodoro-history");
      return;
    }

    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  // SAVE HISTORY
  useEffect(() => {
    localStorage.setItem("pomodoro-history", JSON.stringify(history));
  }, [history]);

  return (
    <div className={`container ${mode}`}>
      <h1>Pomodoro Timer</h1>

      <h2>{mode.toUpperCase()}</h2>

      <div className="timer">{formatTime(timeLeft)}</div>

      <div className="controls">
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="history">
        <h3>Today’s Sessions</h3>

        {history.length === 0 ? (
          <p>No sessions yet</p>
        ) : (
          history.map((item, i) => (
            <div key={i} className="history-item">
              ✓ {item.duration} focus — {item.time}
            </div>
          ))
        )}
      </div>
    </div>
  );
}