import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ProductDetsilStyle from "./ProductDetsilStyle.module.css";
import Rating from "@mui/material/Rating";
import { _sortPropTweensByPriority } from "gsap/gsap-core";
import Footer from "../../components/Fotter/Fotter";
import { DataContext } from "../../components/DataProvider/Dataprovider";
import { Type } from "../../Utlity/action.type";
import Loader from "../../Utlity/Loader/Loader";
const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { state, dispatch } = useContext(DataContext);
  let { ProductId } = useParams();

  // fetch product item
  useEffect(() => {
    setisLoading(true);
    const FetchSingleProduct = async () => {
      const response = await fetch(
        `https://dummyjson.com/products/${ProductId}`
      );
      const data = await response.json();
      setProductDetail(data);
      setisLoading(false);
    };
    FetchSingleProduct();
  }, [ProductId]);

  const handelAddtoCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: productDetail,
    });
  };
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <section className={ProductDetsilStyle.productDetailContainer}>
        <div className={ProductDetsilStyle.singleImgContaine}>
          <div className={ProductDetsilStyle.smallImgShow}>
            {productDetail.images?.map((img) => {
              return <img src={img} alt="" />;
            })}
          </div>
          <div className={ProductDetsilStyle.SingleImg}>
            {productDetail.images && productDetail.images.length > 0 ? (
              <img src={productDetail.images[0]} alt="" />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={ProductDetsilStyle.SingleproductContent_container}>
          <div>
            <h6 className={ProductDetsilStyle.description}>
              {productDetail.description}
            </h6>
            <div className={ProductDetsilStyle.ratingContaienr}>
              <Link to="" className={ProductDetsilStyle.visite_Store}>
                visite the store
              </Link>
              <span className={ProductDetsilStyle.flexLinks_sore}>
                <span>
                  <Rating
                    className={ProductDetsilStyle.rating}
                    name="review-rating"
                    value={productDetail.rating}
                    precision={0.1}
                    sx={{ fontSize: "15px" }}
                  />
                </span>

                <Link to="">
                  <span>{productDetail.rating} rarings</span>

                  <span>Search this page</span>
                </Link>
              </span>

              <span className={ProductDetsilStyle.amazoneChoice}>
                Amazon's Choice
              </span>
              <p className={ProductDetsilStyle.lasbought}>
                500+ bought in past month
              </p>
            </div>
            <hr />
          </div>
          <div
            className={ProductDetsilStyle.singleProduct_center_content}
          ></div>
          <div className={ProductDetsilStyle.priceContainer}>
            <sub>$</sub>
            <h3>{Math.floor(productDetail.price)}</h3>
            <sub>90</sub>
          </div>

          <div className={ProductDetsilStyle.oprduct_details}>
            <h4>Product Details</h4>

            <ul>
              <li>
                Product Name: <span>{productDetail.title}</span>
              </li>

              <li>
                Category: <span>{productDetail.category}</span>
              </li>

              <li>
                Brand: <span>{productDetail.brand}</span>
              </li>
              <li>
                Warranty Information:
                <span>{productDetail.warrantyInformation}</span>
              </li>
              <li>
                Shipping Information:
                <span>{productDetail.shippingInformation}</span>
              </li>
              <li>
                Availability Status:
                <span>{productDetail.availabilityStatus}</span>
              </li>
              <li>
                Weight (grams): <span>{productDetail.weight}g</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={ProductDetsilStyle.addtocart_and_by_btn_container}>
          <div className={ProductDetsilStyle.priceContainer}>
            <sub>$</sub>
            <h3>{Math.floor(productDetail.price)}</h3>
            <sub>90</sub>
          </div>

          <p>
            $314.91 Shipping & Import Fees Deposit to France Details Delivery
            Wednesday, December 18. Order within{" "}
            <span className="text-success"> 18 hrs 51 mins</span>
          </p>
          <span className={ProductDetsilStyle.locationDelever}>
            <span
              class="material-symbols-outlined"
              style={{ fontSize: "15px" }}
            >
              location_on
            </span>{" "}
            Delever to Ethiopia
          </span>
          <h6 className="text-success">in Stock</h6>

          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
          <button
            onClick={() => handelAddtoCart()}
            id={productDetail.id}
            className={ProductDetsilStyle.btn_addTocart}
          >
            <Link to="/cart"> add to cart</Link>
          </button>
          <button className={ProductDetsilStyle.btn_buy}>Buy Now</button>
          <ul className={ProductDetsilStyle.caddTo_cart_list}>
            <li>
              <span>Ships from</span>
              <span>Amazon.com</span>
            </li>
            <li>
              <span>Returns</span>
              <span>Returnable until Jan 31, 2025</span>
            </li>
            <li>
              <span>Payment</span>
              <span>Secure transaction</span>
            </li>
          </ul>
          <div className={ProductDetsilStyle.gift_container_checkbox}>
            <input type="checkbox" name="" id="" />
            <p>Add a gift receipt for easy returns</p>
          </div>
          <button>Add to List</button>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
