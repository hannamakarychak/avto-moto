import classNames from "classnames";

import "./container.scss";

const Container = ({ children, className }) => {
  return <div className={classNames("container", className)}>{children}</div>;
};

export default Container;
