import Container from "../container/container";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <nav className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__link">
                Корпоративным клиентам
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Клиентам
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Аренда авто
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Каршеринг
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Как продать авто
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Trade-in
              </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link">
                Test drive
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
