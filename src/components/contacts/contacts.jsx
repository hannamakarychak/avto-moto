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
        <div className="contacts__text">8 (800) 333-55-99</div>
        <div className="contacts__heading">E-mail</div>
        <div className="contacts__text">info@avto-moto.ru</div>
      </div>
      <div className="contacts__map">
        <Map />
      </div>
    </div>
  );
};

export default Contacts;
