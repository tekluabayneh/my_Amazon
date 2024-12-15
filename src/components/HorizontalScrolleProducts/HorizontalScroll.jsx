import React, { useEffect, useRef, useState } from "react";
import HorizontalSCrollStyle from "./HorizontalSCrollStyle.module.css";
import { Link } from "react-router-dom";
import ImageWithLoader from "../../Utlity/ImageLoader/ImageWithLoader";

const HorizontalSCroll = () => {
  const [HorizontalSCrollProduct, setHorizontalSCrollProduct] = useState([]);
  const [
    HorizontalScrollSingleCategoryProduct,
    setHorizontalScrollSingleCategoryProduct,
  ] = useState([]);

  let HorizontalscrollCategoryRef = useRef(null);
  let HorizontalscrollSingleCategoryRef = useRef(null);

  // fetch hrizontal category
  useEffect(() => {
    const fetchHorizontalSCrollProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();

        setHorizontalSCrollProduct(data);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };
    fetchHorizontalSCrollProducts();
  }, []);

  // fetch single horiontal category
  useEffect(() => {
    const fetchHorizontalSCrollPSingleroducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/women's%20clothing"
        );
        let data = await response.json();

        setHorizontalScrollSingleCategoryProduct(data);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };
    fetchHorizontalSCrollPSingleroducts();
  }, []);

  const handelSCroll = (direction) => {
    if (HorizontalscrollCategoryRef.current) {
      if (HorizontalscrollCategoryRef.current) {
        if (direction == "right") {
          HorizontalscrollCategoryRef.current.scrollBy({
            left: 370,
            behavior: "smooth",
          });
        } else {
          HorizontalscrollCategoryRef.current.scrollBy({
            left: -370,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const handelSingleCategorySCroll = (direction) => {
    if (HorizontalscrollSingleCategoryRef.current) {
      if (HorizontalscrollSingleCategoryRef.current) {
        if (direction == "right") {
          HorizontalscrollSingleCategoryRef.current.scrollBy({
            left: 370,
            behavior: "smooth",
          });
        } else {
          HorizontalscrollSingleCategoryRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
          });
        }
      }
    }
  };

  return (
    <>
      <main className={HorizontalSCrollStyle.mian_scroll_container}>
        <section
          ref={HorizontalscrollCategoryRef}
          className={HorizontalSCrollStyle.HorizontalScrollProduct_container}
        >
          <span
            onClick={() => handelSCroll("left")}
            className={HorizontalSCrollStyle.scrollLeft}
          >
            <span class="material-symbols-outlined">keyboard_arrow_left</span>
          </span>
          <div className={HorizontalSCrollStyle.HorizontalSrollTitle}>
            <h3>Pick up where you left off</h3>
            <p>see more</p>
          </div>
          <div className={HorizontalSCrollStyle.HorizontalSCrollSub_Container}>
            {HorizontalSCrollProduct.map((prod, index) => {
              return (
                <div key={index} className={HorizontalSCrollStyle.ImgContainer}>
                  <Link to={`/HorizontalproductDetsil/${prod.id}`}>
                    <ImageWithLoader
                      className={HorizontalSCrollStyle.img}
                      src={prod.image}
                      width={150}
                      height={200}
                    />
                  </Link>
                </div>
              );
            })}
            <span
              onClick={() => handelSCroll("right")}
              className={HorizontalSCrollStyle.scrollRight}
            >
              <span class="material-symbols-outlined">chevron_right</span>
            </span>
          </div>
        </section>

        <section
          ref={HorizontalscrollSingleCategoryRef}
          className={HorizontalSCrollStyle.HorizontalScrollProduct_container}
        >
          <span
            onClick={() => handelSingleCategorySCroll("left")}
            className={HorizontalSCrollStyle.scrollLeft}
          >
            <span class="material-symbols-outlined">keyboard_arrow_left</span>
          </span>
          <div className={HorizontalSCrollStyle.HorizontalSrollTitle}>
            <h3>Additional items to explore</h3>
            <p>see more</p>
          </div>
          <div className={HorizontalSCrollStyle.HorizontalSCrollSub_Container}>
            {HorizontalScrollSingleCategoryProduct.map((prod, index) => {
              return (
                <div key={index} className={HorizontalSCrollStyle.ImgContainer}>
                  <Link to={`/HorizontalproductDetsil/${prod.id}`}>
                    <ImageWithLoader
                      className={HorizontalSCrollStyle.img}
                      src={prod.image}
                      width={150}
                      height={200}
                    />
                  </Link>
                </div>
              );
            })}
            <span
              onClick={() => handelSingleCategorySCroll("right")}
              className={HorizontalSCrollStyle.scrollRight}
            >
              <span class="material-symbols-outlined">chevron_right</span>
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default HorizontalSCroll;
