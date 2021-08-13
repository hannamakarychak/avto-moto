import { useEffect, useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import Review from "../review/review";

import "./reviews-list.scss";

const REVIEWS_STORAGE_KEY = "reviews";

const DEFAULT_REVIEWS = [
  {
    name: "Борис Иванов",
    pros: "мощность, внешний вид",
    cons: "Слабые тормозные колодки (пришлось заменить)",
    comment:
      "Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.",
    date: new Date(Date.now() - 60000),
    rating: 3,
  },
  {
    name: "Марсель Исмагилов",
    pros: "Cтиль, комфорт, управляемость",
    cons: " Дорогой ремонт и обслуживание",
    comment:
      "Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.",
    date: new Date(Date.now() - 59000),
    rating: 3,
  },
];

const ReviewsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const initialReviews = localStorage.getItem(REVIEWS_STORAGE_KEY);
    setReviews(JSON.parse(initialReviews) || []);
  }, []);

  const handleAddReview = (newReview) => {
    const newReviews = reviews.slice();
    newReviews.push(newReview);

    setReviews(newReviews);
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(newReviews));
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="reviews-list">
      <Button className="reviews-list__add-review" ghost onClick={handleOpenModal}>
        оставить отзыв
      </Button>

      {[...DEFAULT_REVIEWS, ...reviews].map((review) => (
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
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddReview} />
    </div>
  );
};

export default ReviewsList;
