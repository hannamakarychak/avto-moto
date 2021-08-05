const ArrowButton = ({ onClick, disabled, direction, currentImage }) => {
  const stroke = () => (disabled ? "#D7D9DF" : "#48494D");
  return (
    <div
      className={`gallery__button-arrow gallery__button-arrow--${direction}`}
      onClick={() => onClick(currentImage)}
    >
      <svg width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="26" r="25.5" fill="#fff" stroke="#D7D9DF" />
        {direction === "left" ? (
          <path
            d="M17.004 26.172l5.914-5.803m-5.914 5.803l5.689 5.797m-5.689-5.797l18.977.18"
            stroke={stroke()}
          />
        ) : (
          <path
            d="M34.987 26.172l-5.912-5.803m5.912 5.803L29.3 31.969m5.687-5.797l-18.972.18"
            stroke={stroke()}
          />
        )}
      </svg>
    </div>
  );
};

export default ArrowButton;
