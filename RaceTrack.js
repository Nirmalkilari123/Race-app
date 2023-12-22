import React, { useEffect, useState } from "react";

const RaceTrack = ({ participants, onRaceFinish }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((time) => time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRaceFinish = () => {
    onRaceFinish();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "10px", color: "white" }}>Race Track</h2>
      <div style={{ fontSize: "10px", color: "white" }}>
        Elapsed Time: {elapsedTime} seconds
      </div>
      <div>
        {participants.map((participant, index) => (
          <div key={index}>
            {participant.name} is running at speed {participant.speed}
          </div>
        ))}
      </div>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          fontSize: "20px",
          borderRadius: "5px",
          borderWidth: "0px",
        }}
        onClick={handleRaceFinish}
      >
        Finish Race
      </button>
    </div>
  );
};

export default RaceTrack;
