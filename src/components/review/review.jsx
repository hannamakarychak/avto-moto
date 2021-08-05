import { Fragment } from "react";

import "./review.scss";

const rating = 3;

const Review = () => {
  return (
    <Fragment>
      <div className="review__item">
        <div className="review__name">Борис Иванов</div>
        <div className="review__row">
          <span className="review__icon">+</span>
          <div className="review__heading">Достоинства</div>
          <div className="review__text">мощность, внешний вид</div>
        </div>
        <div className="review__row">
          <span className="review__icon">-</span>
          <div className="review__heading">Недостатки</div>
          <div className="review__text">Слабые тормозные колодки (пришлось заменить)</div>
        </div>
        <div className="review__heading review__heading--comment">Комментарий</div>
        <div className="review__text review__text--comment">
          Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым
          характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю,
          что полностью доволен.
        </div>

        <div className="review__row">
          {[1, 2, 3, 4, 5].map((el) => (
            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" key={el}>
              <path
                d="M8.369 0l1.879 5.873h6.08l-4.92 3.63 1.88 5.874-4.92-3.63-4.918 3.63 1.879-5.874-4.92-3.63h6.08L8.37 0z"
                fill={rating >= el ? "#D12136" : "#bdbec2b3"}
              />
            </svg>
          ))}
          <span className="review__recommend">Советует</span>
        </div>
        <div className="review__row">
          <span className="review__time">1 минуту назад</span>
          <button className="review__reply">Ответить</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Review;
