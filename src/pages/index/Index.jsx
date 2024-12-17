import React, { useCallback, useEffect, useMemo, useState } from "react";
import CarouseL from "../../Utlity/carasule/Carousel";
import indexStyle from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import jsonData from "../../data/Categori.json";
import HorizontalScroll from "../../components/HorizontalScrolleProducts/HorizontalScroll";
import ImageWithLoader from "../../Utlity/ImageLoader/ImageWithLoader";
import Loader from "../../Utlity/Loader/Loader";

const Index = () => {
  let [categories, setCategories] = useState([]);
  let [IsLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();

  const HandelClickedProduct = useCallback(
    (url) => {
      navigator("/product", { state: url });
      console.log(url);
    },
    [navigator]
  );

  // store the josn data from ojosn folder to the state
  useEffect(() => {
    setCategories(jsonData);
  }, []);

  return IsLoading ? (
    <Loader />
  ) : (
    <main className={`${indexStyle.HomePageContainer}`}>
      <CarouseL />
      <section className={`${indexStyle.itemsContainer}`}>
        <div className={`${indexStyle.cardContainer}`}>
          <div className={`${indexStyle.card} `}>
            {categories.map((categori, index) => {
              return (
                <div
                  key={index}
                  onClick={() => HandelClickedProduct(categori.url)}
                >
                  <div className={`${indexStyle.item}`}>
                    <h6 className={`${indexStyle.categoriTitle}`}>
                      {categori.name}
                    </h6>

                    <div className={`${indexStyle.imgContainer}`}>
                      {categori.images.map((img, index) => {
                        return (
                          <div
                            key={index}
                            className={`${indexStyle.categoriImg_Container}`}
                          >
                            <img
                              className={`${indexStyle.categoriImg}`}
                              src={img}
                              alt="img"
                            />

                            <p className={`${indexStyle.description}`}>
                              {categori.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <span className={`${indexStyle.shopNow}`}>shop Now</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/*  */}
      <HorizontalScroll />

      <div className={indexStyle.signincontainer}>
        <h2 className={indexStyle.signintitle}>
          See personalized recommendations
        </h2>
        <Link to="/Auth" className={indexStyle.signinbutton}>
          <span className={indexStyle.signintext}>Sign in</span>
        </Link>
        <div className={indexStyle.newcustomertooltip}>
          New customer?&nbsp;
          <Link to="" className={indexStyle.newcustomerlink}>
            Start here.
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Index;
