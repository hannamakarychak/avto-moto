import { useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import Review from "../review/review";

import "./reviews-list.scss";

const ReviewsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = (newReview) => {
    console.log("FORM DATA: ", newReview);
    setIsModalOpen(false);
  };

  return (
    <div className="reviews-list">
      <Button className="reviews-list__add-review" ghost onClick={handleOpenModal}>
        оставить отзыв
      </Button>
      <Review name={"hep"} pros={"good"} cons={"bad"} comment={"bla lba"} date={"minutr"} />
      <Review />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ReviewsList;
