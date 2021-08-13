import classNames from "classnames";
import ReactStars from "react-rating-stars-component";

import "./star-rating.scss";

const StarRating = ({ onChange, className = "" }) => {
  return (
    <div className={classNames("star-rating", className)}>
      <p className="star-rating__caption">Оцените товар:</p>
      <ReactStars
        count={5}
        onChange={onChange}
        isHalf={false}
        emptyIcon={<span className="star-rating__star star-rating__star--empty" />}
        filledIcon={<span className="star-rating__star star-rating__star--full" />}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default StarRating;
