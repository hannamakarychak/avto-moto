import classNames from "classnames";
import { useState } from "react";
import ArrowButton from "../arrow-button/arrow-button";
import "./gallery.scss";

const Gallery = ({ images, thumbnails, className = "", promoLabel }) => {
  const [currentImage, setCurrentImage] = useState(0);
  console.log(currentImage);

  const setNextImage = () => {
    setCurrentImage(currentImage + 1);
  };

  const setPrevImage = () => {
    setCurrentImage(currentImage - 1);
  };

  return (
    <div className={classNames("gallery", className)}>
      <span className="gallery__promo">{promoLabel}</span>
      <img
        srcSet={`${images[currentImage].src}@2x.jpg 2x`}
        className="gallery__main-image"
        alt={images[currentImage].alt}
        src={`${images[currentImage].src}.jpg`}
        width={600}
        height={375}
      />
      <div className="gallery__thumbnails">
        <ArrowButton
          onClick={setPrevImage}
          currentImage={currentImage}
          disabled={currentImage === 0}
          direction="left"
        />
        {thumbnails.map((el) => (
          <img
            key={el}
            className="gallery__thumbnail"
            alt={images[currentImage].alt}
            src={`${el}.jpg`}
            srcSet={`${el}@2x.jpg 2x`}
          />
        ))}
        <ArrowButton
          onClick={setNextImage}
          currentImage={currentImage}
          disabled={currentImage === images.length - 1}
          direction="right"
        />
      </div>
    </div>
  );
};

export default Gallery;
