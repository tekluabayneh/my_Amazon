const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const functions = require("firebase-admin");
const { CurrencySelectorElement } = require("@stripe/react-stripe-js");
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
dotenv.config();
const port = 8080;

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("welcome teklu");
});

app.post("/payment-create", async (req, res) => {
  try {
    let TotalAmount = req.query.total;

    if (TotalAmount < 0) {
      res.status(401).json({
        message: "total must be grater than 0",
      });
      return;
    } else {
      const paymentintent = await Stripe.paymentIntents.create({
        amount: Math.floor(TotalAmount),
        currency: "USD",
      });
      res.status(200).send({
        clientSecret: paymentintent.client_secret,
      });
    }
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(400).send({ error: error.message });
  }
});
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Surver is runing in port ${port}`);
  }
});
exports.api = onRequest(app);
