import { useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import Review from "../review/review";

import "./reviews-list.scss";

const ReviewsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const [reviews, setReviews] = useState([]);

  const handleCloseModal = (newReview) => {
    const newReviews = reviews.slice();
    newReviews.push(newReview);

    setReviews(newReviews);
    setIsModalOpen(false);
  };

  return (
    <div className="reviews-list">
      <Button className="reviews-list__add-review" ghost onClick={handleOpenModal}>
        оставить отзыв
      </Button>

      {reviews.map((review) => (
        <Review
          name={review.name}
          pros={review.pros}
          cons={review.cons}
          comment={review.comment}
          date={review.date}
          rating={review.rating}
          key={review.date}
        />
      ))}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ReviewsList;
