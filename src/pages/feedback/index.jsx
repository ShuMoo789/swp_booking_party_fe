// src/components/FeedbackForm.js

import React, { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Gửi phản hồi đến backend hoặc xử lý nó theo nhu cầu của bạn
    console.log("Submitted feedback:", feedback);
    // Reset ô phản hồi sau khi gửi
    setFeedback("");
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
