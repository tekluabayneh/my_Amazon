import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import ProductStyle from "./ProductStyle.module.css";
import LazyLoad from "react-lazyload";
import ProdutFilerSideBar from "../../components/ProdutFilerSideBar/ProdutFilerSideBar";
import HorizontalSCrollStyle from "../../components/HorizontalScrolleProducts/HorizontalSCrollStyle.module.css";
import ImageWithLoader from "../../Utlity/ImageLoader/ImageWithLoader";
import Loader from "../../Utlity/Loader/Loader";
const Product = () => {
  const [isLoading, setisLoading] = useState(false);
  const [
    HorizontalScrollSingleCategoryProduct,
    setHorizontalScrollSingleCategoryProduct,
  ] = useState([]);
  let { state } = useLocation();
  const [products, setproduct] = useState([]);
  const [Error, setError] = useState("");
  const navigator = useNavigate();
  let HorizontalscrollSingleCategoryRef = useRef(null);

  // handel fetthing the product
  const fetchProduct = async () => {
    setisLoading(true);
    try {
      const response = await fetch(state);
      let data = await response.json();
      setproduct(data.products);
      setisLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError(error);
    }
  };

  // fetch single horiontal category
  useEffect(() => {
    setisLoading(true);
    const fetchHorizontalSCrollPSingleroducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/women's%20clothing"
        );
        let data = await response.json();

        setHorizontalScrollSingleCategoryProduct(data);
        setisLoading(false);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };
    fetchHorizontalSCrollPSingleroducts();
  }, []);

  useEffect(() => {
    if (state) {
      fetchProduct();
    }
  }, [state]);

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
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className={ProductStyle.productHorizontal_top_container}>
        <h1>Today's Deals</h1>
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
            {HorizontalScrollSingleCategoryProduct.map((prod) => {
              return (
                <div className={HorizontalSCrollStyle.ImgContainer}>
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
      </div>

      <section className={`${ProductStyle.producPage_Main_Container}`}>
        <span className={ProductStyle.horizontalLine}></span>

        <div className={`${ProductStyle.ProductFilterSideBar}`}>
          <ProdutFilerSideBar />
        </div>

        <div className={ProductStyle.Procudt_Container}>
          {products.map((prod) => {
            return (
              <Link
                to={`/productDetail/${prod.id}`}
                key={prod.id}
                className={ProductStyle.productCard}
              >
                <div className={ProductStyle.productImageContainer}>
                  {prod.images.slice(0, 1).map((image, index) => (
                    <div className={ProductStyle.productImage}>
                      <ImageWithLoader
                        key={index}
                        className={ProductStyle.productImage}
                        src={image}
                        width={200}
                        height={200}
                      />
                    </div>
                  ))}
                </div>

                <div className={ProductStyle.productHeader}>
                  <p className={ProductStyle.productBrand}>{prod.brand}</p>

                  <p className={ProductStyle.LimitedMoneyContainer}>
                    <span className={ProductStyle.ShowDeailOffer}>
                      {Math.floor(Math.random() * 80)}% off
                    </span>
                    <span className={ProductStyle.LimitedItem}>
                      Limited time Deail
                    </span>
                  </p>
                  <p className={ProductStyle.productDescription}>
                    {prod.description.slice(0, 50)}...
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Product;
