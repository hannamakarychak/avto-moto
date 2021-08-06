const Form = () => {
  return (
    <form className="form">
      <div>
        <input type="text" name="name" className="input" placeholder="Имя" required />
        <input type="text" name="cons" className="input" placeholder="Достоинства" />
        <input type="text" name="name" className="input" placeholder="Недостатки" />
      </div>
      <div>
        <label>
          Оцените товар
          <svg width="27" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.569 0l3.046 9.523h9.858l-7.975 5.885 3.046 9.523-7.975-5.885-7.976 5.885 3.047-9.523L.664 9.523h9.858L13.57 0z"
              fill="#BDBEC2"
              fill-opacity=".7"
            />
          </svg>
          <input type="radio" name="rating" value="1" />
          <input type="radio" name="rating" value="2" />
          <input type="radio" name="rating" value="3" />
          <input type="radio" name="rating" value="4" />
          <input type="radio" name="rating" value="5" />
        </label>
        <textarea cols="5" required>
          Комментарий
        </textarea>
      </div>
    </form>
  );
};

export default Form;
