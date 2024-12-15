import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ProductDetsilStyle from "../../pages/Product_Details/ProductDetsilStyle.module.css";
import Rating from "@mui/material/Rating";
import { DataContext } from "../DataProvider/Dataprovider";
import { Type } from "../../Utlity/action.type";
import Loader from "../../Utlity/Loader/Loader";
const HorizontalproductDetsil = () => {
  const { state, dispatch } = useContext(DataContext);
  const [singleProduct, setSingleProduct] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  let { ProductId } = useParams();

  // fetch single horiontal category
  useEffect(() => {
    const fetchSingleProduct = async () => {
      setisLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${ProductId}`
        );
        let data = await response.json();
        setSingleProduct(data);
        setisLoading(false);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };
    fetchSingleProduct();
  }, [ProductId]);

  const handelAddtoCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: singleProduct,
    });
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={ProductDetsilStyle.productDetailContainer}>
          <div className={ProductDetsilStyle.singleImgContaine}>
            <div className={ProductDetsilStyle.smallImgShow}>
              {singleProduct.image && singleProduct.image.length > 0 ? (
                <img src={singleProduct.image} alt="" />
              ) : (
                ""
              )}
            </div>
            <div className={ProductDetsilStyle.SingleImg}>
              {singleProduct.image && singleProduct.image.length > 0 ? (
                <img src={singleProduct.image} alt="" />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className={ProductDetsilStyle.SingleproductContent_container}>
            <div>
              <h6 className={ProductDetsilStyle.description}>
                {singleProduct.description}
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
                      value={
                        singleProduct.rating ? singleProduct.rating.rate : ""
                      }
                      precision={0.1}
                      sx={{ fontSize: "15px" }}
                    />
                  </span>

                  <Link to="">
                    <span>
                      {singleProduct.rating ? singleProduct.rating.rate : ""}
                      rarings
                    </span>

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
              <h3>{Math.floor(singleProduct.price)}</h3>
              <sub>90</sub>
            </div>

            <div className={ProductDetsilStyle.oprduct_details}>
              <h4>Product Details</h4>

              <ul>
                <li>
                  Product Name: <span>{singleProduct.title}</span>
                </li>

                <li>
                  Category: <span>{singleProduct.category}</span>
                </li>

                <li>
                  Brand: <span>{singleProduct.brand}</span>
                </li>
                <li>
                  Warranty Information:
                  <span>{singleProduct.warrantyInformation}</span>
                </li>
                <li>
                  Shipping Information:
                  <span>{singleProduct.shippingInformation}</span>
                </li>
                <li>
                  Availability Status:
                  <span>{singleProduct.availabilityStatus}</span>
                </li>
                <li>
                  Weight (grams): <span>{singleProduct.weight}g</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={ProductDetsilStyle.addtocart_and_by_btn_container}>
            <div className={ProductDetsilStyle.priceContainer}>
              <sub>$</sub>
              <h3>{Math.floor(singleProduct.price)}</h3>
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
              id={singleProduct.id}
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
      )}
    </>
  );
};

export default HorizontalproductDetsil;
