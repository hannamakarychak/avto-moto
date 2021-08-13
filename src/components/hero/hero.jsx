import Button from "../button/button";
import Container from "../container/container";
import Gallery from "../gallery/gallery";
import GasIcon from "../gas-icon/gas-icon";
import HorseIcon from "../horse-icon/horse-icon";
import TransmitionIcon from "../transmition-icon/transmition-icon";
import VolumeIcon from "../volume-icon/volume-icon";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <Container className="hero__container">
        <Gallery
          className="hero__gallery"
          images={[
            { src: "img/car1", alt: "Морпех 11 экстерьер" },
            { src: "img/car-thumbnail2", alt: "Морпех 11 салон" },
            { src: "img/car-thumbnail3", alt: "Морпех 11 приборы" },
          ]}
          thumbnails={["img/car-thumbnail1", "img/car-thumbnail2", "img/car-thumbnail3"]}
          promoLabel="new model"
        />

        <div className="hero__info">
          <h1 className="hero__heading">Марпех 11</h1>
          <div className="hero__specs">
            <div className="hero__specs-item">
              <GasIcon className="hero__specs-icon" />
              <div className="hero__specs-text">бензин</div>
            </div>
            <div className="hero__specs-item">
              <TransmitionIcon className="hero__specs-icon" />
              <div className="hero__specs-text">механика</div>
            </div>
            <div className="hero__specs-item">
              <HorseIcon className="hero__specs-icon" />
              <div className="hero__specs-text">100 л.с.</div>
            </div>
            <div className="hero__specs-item">
              <VolumeIcon className="hero__specs-icon" />
              <div className="hero__specs-text">1.4 л</div>
            </div>
          </div>
          <div className="hero__price">
            <span className="hero__current-price">2 300 000 ₽</span>
            <span className="hero__old-price">2 400 000 ₽</span>
          </div>
          <Button className="hero__button">оставить заявку</Button>
          <Button className="hero__button" ghost>
            В КРЕДИТ ОТ 11 000 ₽
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
