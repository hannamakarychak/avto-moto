import Container from "../container/container";
import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <Logo className="header__logo" />
        <Navigation />
      </Container>
    </header>
  );
};
export default Header;
