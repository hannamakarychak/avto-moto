import classNames from "classnames";

import "./button.scss";

const Button = ({ className, children, ghost = false }) => {
  return (
    <button className={classNames("button", className, { "button--ghost": ghost })}>
      {children}
    </button>
  );
};

export default Button;
