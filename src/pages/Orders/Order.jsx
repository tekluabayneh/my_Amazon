import React, { useContext, useEffect, useState } from "react";
import Loader from "../../Utlity/Loader/Loader";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../components/DataProvider/Dataprovider";
import { Link } from "react-router-dom";
import {
  collection,
  doc,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../Utlity/firebaseConfig/firebaseConfig";
import "../Cart/cart.css";
const Order = () => {
  const { state, dispatch } = useContext(DataContext);
  const [isLoading, setisLoading] = useState(true);
  const [order, setorder] = useState([]);

  // get the user id from localstorage
  const uid = localStorage.getItem("userUID");

  // fetch user order
  useEffect(() => {
    if (state.user) {
      const ordersRef = collection(db, "users", uid, "orders");
      const ordersQuery = query(ordersRef, orderBy("created", "desc"));

      const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
        const ordersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setorder(ordersData);
        setisLoading(false);
      });
      return () => unsubscribe();
    } else {
      setorder([]);
    }
  }, [state?.user]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="cart_main_container">
          <div className="lefSideItem_content_container">
            <div className="cartItem_header">
              <h1 className="cart_page_title">Your Orders</h1>
            </div>
            <hr />

            <div>
              {order.length === 0 && (
                <div className="no-orders-container">
                  <h3 className="no-orders-message">
                    You don’t have any orders yet.
                  </h3>
                  <p>Start shopping to place your first order!</p>
                  <Link to="/" className="shop-now-button">
                    Shop Now
                  </Link>
                </div>
              )}
            </div>

            <div className="cart_list_container">
              {order?.map((item, index) => {
                console.log(item);
                return (
                  <>
                    <div key={index} className="item_list">
                      <div className="cartItemImg">
                        <img
                          src={
                            item.basket[0]?.thumbnail || item.basket[0].image
                          }
                          alt="image"
                        />
                      </div>
                      <div className="cartIitemContentContainer">
                        <div>
                          <h6>{item.basket[0].title}</h6>
                          <p>{item.basket[0].description}...</p>
                          <div>
                            <span className="inStock_container">
                              <span className="inStock">in stock</span>
                              <span className="thisIs_Gifet_text_container">
                                <input type="checkbox" />
                                <span>this is a Gift</span>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="price_limited_day_container">
                          <span className="itemOff_number">
                            {Math.floor(Math.random() * 60)}%off
                          </span>
                          <span className="limited_deal">
                            Limited time deal
                          </span>
                          <span className="Typical_price">
                            Typical price: {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Order;
