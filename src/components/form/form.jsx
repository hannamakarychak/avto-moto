import classNames from "classnames";
import { useState } from "react";
import Button from "../button/button";
import StarRating from "../star-rating/star-rating";
import "./form.scss";

const Form = ({ onSubmit }) => {
  const [nameInput, setNameInput] = useState("");
  const [hasNameInputError, setHasNameInputError] = useState(false);
  const [rating, setRating] = useState(0);
  const [prosInput, setProsInput] = useState("");
  const [consInput, setConsInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [hasCommentInputError, setHasCommentInputError] = useState(false);

  const handleNameInputChange = (evt) => {
    setHasNameInputError(false);
    setNameInput(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (nameInput === "") {
      setHasNameInputError(true);
    }
    if (commentInput === "") {
      setHasCommentInputError(true);
    }

    if (nameInput === "" || commentInput === "") {
      return;
    }

    onSubmit({
      name: nameInput,
      rating,
      pros: prosInput,
      cons: consInput,
      comment: commentInput,
      date: Date.now(),
    });
  };

  const handleProsInputChange = (evt) => {
    setProsInput(evt.target.value);
  };

  const handleConsInputChange = (evt) => {
    setConsInput(evt.target.value);
  };

  const handleCommentInputChange = (evt) => {
    setHasCommentInputError(false);
    setCommentInput(evt.target.value);
  };

  return (
    <form className="form">
      <div className="form__main">
        <div className="form__col">
          {hasNameInputError && <p className="form__error-message">Пожалуйста, заполните поле</p>}
          <input
            type="text"
            name="name"
            className={classNames("form__input form__input--required", {
              "form__input--error": hasNameInputError,
            })}
            placeholder="Имя"
            required
            value={nameInput}
            onChange={handleNameInputChange}
          />
          <input
            type="text"
            name="cons"
            className="form__input"
            placeholder="Достоинства"
            value={prosInput}
            onChange={handleProsInputChange}
          />
          <input
            type="text"
            name="name"
            className="form__input"
            placeholder="Недостатки"
            value={consInput}
            onChange={handleConsInputChange}
          />
        </div>
        <div className="form__col">
          <StarRating onChange={setRating} className="form__star-rating" />
          {hasCommentInputError && (
            <p className="form__error-message">Пожалуйста, заполните поле</p>
          )}
          <textarea
            className={classNames("form__input form__input--required form__input--textarea", {
              "form__input--error": hasCommentInputError,
            })}
            rows="5"
            required
            placeholder="Комментарий"
            value={commentInput}
            onChange={handleCommentInputChange}
          />
        </div>
      </div>
      <Button className="form__button-submit" onClick={handleSubmit}>
        оставить отзыв
      </Button>
    </form>
  );
};

export default Form;
