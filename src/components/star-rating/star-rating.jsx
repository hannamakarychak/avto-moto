import classNames from "classnames";
import { Fragment } from "react";
import "./star-rating.scss";

const STARS = [
  {
    rating: 5,
    label: "Идеально",
  },
  {
    rating: 4,
    label: "Отлично",
  },
  {
    rating: 3,
    label: "Хорошо",
  },
  {
    rating: 2,
    label: "Так себе",
  },
  {
    rating: 1,
    label: "Ужасно",
  },
];

const StarRating = ({ onChange, className = "" }) => {
  return (
    <div className={classNames("star-rating", className)}>
      <p className="star-rating__caption">Оцените товар:</p>
      <div className="star-rating__group">
        {STARS.map(({ rating, label }) => (
          <Fragment key={`rating-${rating}`}>
            <input
              className="star-rating__input"
              type="radio"
              name="rating"
              id={`rating-${rating}`}
              value={rating}
              onClick={() => onChange(rating)}
            />
            <label className="star-rating__star" htmlFor={`rating-${rating}`} aria-label={label} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
