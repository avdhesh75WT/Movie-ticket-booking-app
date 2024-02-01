const express = require("express");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OetKdSJ9k6k6jquqz5Kly3nvnay7qawPYbQobnQuF6lXyt1xzPvOr6VIopDtBgvDBwWiL2ZvdjuhziwGSK8xCeP00uul2g4ux"
);

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// let instance = new Razorpay({
//   key_id: "rzp_test_Nz0DKL17sCwJU4",
//   key_secret: "rQLYTaDi2FDQVU0UmCQWvFnQ",
// });

app.post("/", async (req, res) => {
  try {
    const { cost } = req.body;
    console.log("hi", cost);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: cost * 100,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    return res.status(200).json({ paymentIntent: paymentIntent.client_secret });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log(`Server running on port 3000!`));
