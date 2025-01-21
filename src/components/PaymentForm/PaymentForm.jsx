import React, { useContext, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { DataContext } from "../DataProvider/Dataprovider";
import { FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { settings } from "firebase/analytics";
import { auth, db } from "../../Utlity/firebaseConfig/firebaseConfig";
import {
  collection,
  setDoc,
  doc,
  QueryCompositeFilterConstraint,
} from "firebase/firestore";
import { Type } from "../../Utlity/action.type";
const PaymentForm = () => {
  const { state, dispatch } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [carderror, cardseterror] = useState(null);
  const [processing, setproccesing] = useState(false);
  const navigator = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    e?.error?.message ? cardseterror(e?.error?.message) : cardseterror("");
  };

  // get the totlal amount from the basket
  const Total = state.basket.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );
  // https://my-amazon-u75f.onrender.com/
  // `http://localhost:8080/payment-create?total=${Total * 100}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setproccesing(true);
    try {
      const response = await fetch(
        `https://my-amazon-u75f.onrender.com/payment-create?total=${
          Total * 100
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();

      // get the clientSecret from the response
      const clientSecrect = data.clientSecret;

      // confairm the payment
      const conFairmPayment = await stripe.confirmCardPayment(clientSecrect, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      // navigate the user to the order page if the user payment is succesfull
      if (conFairmPayment.error) {
        navigator("");
        return;
      } else if (conFairmPayment.paymentIntent) {
        let paymentIntent = conFairmPayment.paymentIntent;
        await setDoc(
          doc(
            collection(db, "users"),
            state.user.uid,
            "orders",
            paymentIntent.id
          ),
          {
            basket: state.basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          }
        );
        // store the user uid to the localStorge
        localStorage.setItem("userUID", state.user.uid);
        dispatch({
          type: Type.EMPTY_BASKET,
        });
        navigator("/order", {
          state: { msg: "you have placed new order" },
        });
      }
      setproccesing(false);
    } catch (error) {
      console.log(error);
      setproccesing(false);
      navigator("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "700px",
        margin: "auto",
      }}
    >
      <div className="Payment_place_content">
        <h1>Proceed here to complete your payment</h1>

        <div style={wrapperStyle}>
          <CardElement onChange={handleChange} options={cardStyle} />
          <span style={{ color: "red", display: "block" }}>{carderror}</span>
          <button
            type="submit"
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "#5469d4",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            disabled={!stripe || loading}
          >
            {processing ? (
              <div style={{ transform: "scale(0.4)", display: "inline-block" }}>
                <FadeLoader height={15} width={5} color="#123abc" />
              </div>
            ) : (
              "Pay Now"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      border: "2px solid gray",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
const wrapperStyle = {
  width: "100%",
  padding: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  marginBottom: "20px",
  background: "#f9f9f9",
  display: "flex",
  gap: "18px",
  flexDirection: "column",
};
