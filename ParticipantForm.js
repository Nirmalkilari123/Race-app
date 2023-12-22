import React, { useState } from "react";

const ParticipantForm = ({ onSubmit }) => {
  const [participants, setParticipants] = useState([]);
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");

  const handleAddParticipant = () => {
    if (participants.length < 10 && name && speed) {
      setParticipants([...participants, { name, speed }]);
      setName("");
      setSpeed("");
    }
  };

  const handleSubmit = () => {
    onSubmit(participants);
  };

  return (
    <div>
      <h2 style={{ color: "red", textAlign: "center" }}>Participant Entries</h2>
      <div style={{ color: "blue", textAlign: "center", margin: "10px" }}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ color: "blue", textAlign: "center" }}>
        <label>Speed:</label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />
      </div>
      <div style={{ color: "blue", textAlign: "center", margin: "10px" }}>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            fontSize: "20px",
            borderRadius: "5px",
            borderWidth: "0px",
            margin: "10px",
          }}
          onClick={handleAddParticipant}
        >
          Add Participant
        </button>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            fontSize: "20px",
            borderRadius: "5px",
            borderWidth: "0px",
          }}
          onClick={handleSubmit}
        >
          Start Race
        </button>
      </div>
    </div>
  );
};

export default ParticipantForm;
