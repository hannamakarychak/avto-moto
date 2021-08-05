import { useState } from "react";
import ArrowButton from "../arrow-button/arrow-button";
import "./gallery.scss";

const Gallery = ({ images, thumbnails }) => {
  const [currentImage, setCurrentImage] = useState(0);
  console.log(currentImage);

  const setNextImage = (currentImage) => {
    if (currentImage <= 2) {
      setCurrentImage(currentImage + 1);
    }
  };

  const setPrevImage = (currentImage) => {
    if (currentImage >= 1) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className="gallery__slider">
      <div className="gallery__main-image-wrapper">
        <img
          className="gallery__main-image"
          alt={`Марпех ${currentImage}`}
          src={images[currentImage]}
        ></img>
      </div>
      <div className="gallery__other">
        <ArrowButton
          onClick={() => setPrevImage(currentImage)}
          currentImage={currentImage}
          disabled={currentImage === 0 ? true : false}
          direction="left"
        ></ArrowButton>
        <div className="gallery__other-image-wrapper">
          <img className="gallery__other-image" alt="Марпех 11" src={thumbnails[0]}></img>
        </div>
        <div className="gallery__other-image-wrapper">
          <img className="gallery__other-image" alt="Марпех 11 салон" src={thumbnails[1]}></img>
        </div>
        <div className="gallery__other-image-wrapper">
          <img className="gallery__other-image" alt="Марпех 11 салон" src={thumbnails[2]}></img>
        </div>
        <ArrowButton
          onClick={() => setNextImage(currentImage)}
          currentImage={currentImage}
          disabled={currentImage === 2 ? true : false}
          direction="right"
        ></ArrowButton>
      </div>
    </div>
  );
};

export default Gallery;
