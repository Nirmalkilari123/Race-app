import React from "react";

const RaceResults = ({ winners }) => {
  return (
    <div>
      <h2>Race Results</h2>
      <div>
        <strong>Winners:</strong>
        {winners.map((winner, index) => (
          <div key={index}>{winner.name}</div>
        ))}
      </div>
    </div>
  );
};

export default RaceResults;
