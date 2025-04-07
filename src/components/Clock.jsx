// src/components/Clock.jsx
import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "1rem", fontSize: "1.5rem" }}>
      <div>Date: {currentTime.toLocaleDateString()}</div>
      <div>Time: {currentTime.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
