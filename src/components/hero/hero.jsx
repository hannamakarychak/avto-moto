import Button from "../button/button";
import Container from "../container/container";
import GasIcon from "../gas-icon/gas-icon";
import HorseIcon from "../horse-icon/horse-icon";
import TransmitionIcon from "../transmition-icon/transmition-icon";
import VolumeIcon from "../volume-icon/volume-icon";

import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <Container className="hero__slider-container">
        <div className="hero__slider">
          <div className="hero__main-image-wrapper">
            img will be here
            <img className="hero__main-image" alt="Марпех 11"></img>
          </div>
          <div className="hero__other">
            <button className="hero__button-arrow">
              <svg width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="26" r="25.5" fill="#fff" stroke="#D7D9DF" />
                <path
                  d="M17.004 26.172l5.914-5.803m-5.914 5.803l5.689 5.797m-5.689-5.797l18.977.18"
                  stroke="#D7D9DF"
                />
              </svg>
            </button>
            <div className="hero__other-image-wrapper">
              img will be here
              <img className="hero__other-image" alt="Марпех 11"></img>
            </div>
            <div className="hero__other-image-wrapper">
              img will be here
              <img className="hero__other-image" alt="Марпех 11 салон"></img>
            </div>
            <div className="hero__other-image-wrapper">
              img will be here
              <img className="hero__other-image" alt="Марпех 11 салон"></img>
            </div>
            <button className="hero__button-arrow">
              <svg width="52" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.5 26c0 14.083 11.414 25.5 25.494 25.5S51.487 40.083 51.487 26 40.073.5 25.994.5C11.914.5.5 11.917.5 26z"
                  fill="#fff"
                  stroke="#D7D9DF"
                />
                <path
                  d="M34.987 26.172l-5.912-5.803m5.912 5.803L29.3 31.969m5.687-5.797l-18.972.18"
                  stroke="#48494D"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hero__info">
          <h2 className="hero__heading">Марпех 11</h2>
          <div className="hero__specs">
            <div className="hero__specs-item">
              <GasIcon className="hero__specs-icon" />
              <div className="hero__specs-text">бензин</div>
            </div>
            <div className="hero__specs-item">
              <TransmitionIcon />
              <div className="hero__specs-text">механика</div>
            </div>
            <div className="hero__specs-item">
              <HorseIcon />
              <div className="hero__specs-text">100 л.с.</div>
            </div>
            <div className="hero__specs-item">
              <VolumeIcon />
              <div className="hero__specs-text">1.4 л</div>
            </div>
          </div>
          <div className="hero__price">
            <span className="hero__current-price">2 300 000 ₽</span>
            <span className="hero__old-price">2 400 000 ₽</span>
            <svg
              className="hero__line-through"
              width="125"
              height="13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 12.5L124 1" stroke="#A3A4A6" />
            </svg>
          </div>
          <Button className="hero__button button--accent">оставить заявку</Button>
          <Button className="hero__button button--ghost">В КРЕДИТ ОТ 11 000 ₽</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
