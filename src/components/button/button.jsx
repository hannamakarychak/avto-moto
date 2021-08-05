import classNames from "classnames";

import "./button.scss";

const Button = ({ className, children }) => {
  return <button className={classNames("button", className)}>{children}</button>;
};

export default Button;
