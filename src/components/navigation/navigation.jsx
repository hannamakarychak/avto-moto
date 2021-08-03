import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="/">
            Автомобили
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/">
            Контакты
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/">
            Услуги
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="/">
            Вакансии
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
