import classNames from "classnames";

import "./button.scss";

const Button = ({ className, children, ghost = false, onClick }) => {
  return (
    <button
      className={classNames("button", className, { "button--ghost": ghost })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
