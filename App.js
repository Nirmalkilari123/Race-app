import React, { useState } from "react";
import ParticipantForm from "./components/ParticipantForm";
import RaceTrack from "./components/RaceTrack";
import RaceResults from "./components/RaceResults";

const App = () => {
  const [participants, setParticipants] = useState([]);
  const [raceStarted, setRaceStarted] = useState(false);
  const [winners, setWinners] = useState([]);

  const handleParticipantSubmit = (participants) => {
    setParticipants(participants);
    setRaceStarted(true);
  };

  const handleRaceFinish = () => {
    // Implement race logic and determine winners
    setWinners(participants.slice(0, 3)); // Example: Top 3 participants as winners
  };

  return (
    <div
      style={{
        height: "1350px",
        width: "1550px",
        backgroundSize: "full-width",
        backgroundImage: `url("data:image/jpeg;base64,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")`,
      }}
    >
      {!raceStarted && <ParticipantForm onSubmit={handleParticipantSubmit} />}
      {raceStarted && !winners.length && (
        <RaceTrack
          participants={participants}
          onRaceFinish={handleRaceFinish}
        />
      )}
      {winners.length > 0 && <RaceResults winners={winners} />}
    </div>
  );
};

export default App;
