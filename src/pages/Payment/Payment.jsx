import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../components/DataProvider/Dataprovider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
const Payment = () => {
  const { state, dispatch } = useContext(DataContext);
  const [loading, setLoading] = useState(false);

  // loading stripe public key
  const stripePromise = loadStripe(
    "pk_test_51Q1mMR07cCSzXErvwrM5mwcHF8F7S6BIcETn5XjAFT8b5hbR2RPbDKKwwk03nf8iJu6HlKOTYvqdNe4IpkwTWgpt00oNE5pJP3"
  );

  return state.basket == "" ? (
    <div className="basket_empty_show">
      <h2>Oops! Your basket is empty. Let’s fill it with something amazing!</h2>
    </div>
  ) : (
    <section className="cart_main_container">
      <div className="lefSideItem_content_container">
        <div className="cartItem_header">
          <h1 className="cart_page_title">
            Checkout:({state.basket.length}) items
          </h1>
          <div className="email_address">
            <span>Delivary Adrdess</span>
            <div>
              <div>{state.user?.email}</div>
              <div>123react Lane</div>
              <div>Chicago LI</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="cart_list_container">
          {state.basket.map((item) => {
            return (
              <>
                <div className="item_list">
                  <div className="cartItemImg">
                    <img src={item.image || item.images[0]} alt="" />
                  </div>
                  <div className="cartIitemContentContainer">
                    <div>
                      <p>{item.description}...</p>

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
                      <span className="limited_deal">Limited time deal</span>
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
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
