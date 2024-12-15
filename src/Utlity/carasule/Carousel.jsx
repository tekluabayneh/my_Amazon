import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Img } from "../../assets/carouseImg/img";
import indexStyle from "../../pages/index/index.module.css";
const CarouseL = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {Img.map((img, index) => {
          return (
            <div key={index} className={`${indexStyle.CarouselContainer}`}>
              <img key={index} src={img} alt="img" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouseL;
