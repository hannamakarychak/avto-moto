import Map from "../map/map";
import "./contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__info">
        <div className="contacts__heading">Адрес</div>
        <div className="contacts__text">Санкт-Петербург, набережная реки Карповки, дом 5</div>
        <div className="contacts__heading">Режим работы</div>
        <div className="contacts__text">Ежедневно, с 10:00 до 21:00</div>
        <div className="contacts__heading">Телефон</div>
        <a className="contacts__text" href="tel:8(800)333-55-99">
          8 (800) 333-55-99
        </a>
        <div className="contacts__heading">E-mail</div>
        <a className="contacts__text" href="info@avto-moto.ru">
          info@avto-moto.ru
        </a>
      </div>
      <div className="contacts__map">
        <Map />
      </div>
    </div>
  );
};

export default Contacts;
