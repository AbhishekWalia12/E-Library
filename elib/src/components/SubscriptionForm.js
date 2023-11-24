import React, { useState } from "react";
import "./SubscriptionForm.css";
import { Dialog, DialogContent, TextField, Button, ToggleButton, ToggleButtonGroup } from "@mui/material";

const SubscriptionForm = ({ onSave, onCancel }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [joiningDate, setJoiningDate] = useState(""); // Add state for joining date

  const handleSave = () => {
    onSave(input1, input2, joiningDate); // Pass joining date to the onSave function
    setInput1("");
    setInput2("");
    setJoiningDate(""); // Clear the joining date input
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Subscription Form</h2>
        <label htmlFor="input1">Name:</label>
        <input
          type="text"
          id="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <label htmlFor="input2">Employee ID:</label>
        <input
          type="text"
          id="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <label htmlFor="joiningDate">Joining Date:</label>
        <TextField
          type="date"
          name="joiningDate"
          // label="Joining Date"
          variant="outlined"
          value={joiningDate}
          onChange={(e) => setJoiningDate(e.target.value)}
        />
        
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default SubscriptionForm;
