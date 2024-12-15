import React, { useContext } from "react";
import { DataContext } from "../../components/DataProvider/Dataprovider";
import "./cart.css";
import { Type } from "../../Utlity/action.type";
import { Link } from "react-router-dom";
const Cart = () => {
  const { state, dispatch } = useContext(DataContext);

  const TotalPrice = state.basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const addToCart = (item) => {
    dispatch({ type: Type.ADD_TO_BASKET, item });
  };

  const removeToCart = (id) => {
    dispatch({ type: Type.REMOVE_FROM_BASKET, id });
  };

  return state.basket == "" ? (
    <div className="basket_empty_show">
      <h2>Oops! Your basket is empty. Let’s fill it with something amazing!</h2>
    </div>
  ) : (
    <section className="cart_main_container">
      <div className="lefSideItem_content_container">
        <div className="cartItem_header">
          <h1 className="cart_page_title">Shopping Cart</h1>
          <p className="price">price</p>
        </div>
        <hr />
        <div className="cart_list_container">
          {state.basket.map((item, index) => {
            return (
              <>
                <div key={index} className="item_list">
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
                        <button className="Add_or_remove_btn">
                          <span
                            onClick={() => removeToCart(item.id)}
                            class="material-symbols-outlined"
                          >
                            remove
                          </span>
                          {item.amount}
                          <span
                            onClick={() => addToCart(item)}
                            class="material-symbols-outlined"
                          >
                            add
                          </span>
                        </button>
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
        </div>
      </div>

      <div className="checkout_container">
        <h5>
          {" "}
          Subtotal ({state.basket.length} items):${Math.floor(TotalPrice)}
        </h5>
        <div className="checkout_iput_container">
          <input type="checkbox" name="" id="" />
          <span>This order contains a gift</span>
        </div>
        <Link to="/payment">
          <button>procces to checkout</button>
        </Link>
      </div>
    </section>
  );
};

export default Cart;
