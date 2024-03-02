import { useState } from 'react';
import '../../pages/feedback/feedback.scss';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Rating:', rating);
    console.log('Comment:', comment);
  };

  return (
    <div className="feedback-container">
      <h5>How was your experience with our birthday party service?</h5>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= rating ? 'filled' : ''}`}
            onClick={() => handleRatingChange(value)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <textarea
        placeholder="Share your experience..."
        value={comment}
        onChange={handleCommentChange}
        className="comment-input"
        rows="4"
      />
      <button onClick={handleSubmit} className="submit-button">
        Submit review
      </button>
    </div>
  );
};

export default Feedback;