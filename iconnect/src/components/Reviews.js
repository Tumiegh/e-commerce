import React, { useState } from 'react';
import './Reviews.css';

function Reviews() {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    { name: 'Emily Davis', comment: 'Fast shipping and excellent customer service.', rating: 5 },
    { name: 'Michael Brown', comment: 'Product was as described. Would buy again.', rating: 4 },
    // Add more reviews as needed
  ];

  // Limit the number of reviews shown initially
  const reviewsToShow = showAll ? reviews : reviews.slice(0, 4);

  return (
    <div className="reviews-container">
      <div className="reviews-list">
        {reviewsToShow.map((review, index) => (
          <div key={index} className="review-item">
            <h3>{review.name}</h3>
            <p>{review.comment}</p>
            <span className="rating">Rating: {review.rating}/5</span>
          </div>
        ))}
        <button onClick={() => setShowAll(!showAll)} className="view-more-btn">
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
      <div className="ratings-graph">
        <h3>Ratings Graph</h3>
        <div className="graph">
          {reviews.map((review, index) => (
            <div key={index} className="graph-bar" style={{ height: `${review.rating * 20}%` }}>
              {review.rating}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;

