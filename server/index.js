const express = require("express");
const Razorpay = require("razorpay");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// app.use(bodyParser.json({ limit: "30mb" }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

let instance = new Razorpay({
  key_id: "rzp_test_Nz0DKL17sCwJU4",
  key_secret: "rQLYTaDi2FDQVU0UmCQWvFnQ",
});

app.post("/", async (req, res) => {
  try {
    console.log("hi");
    const { cost } = req.body;
    console.log("cost:-> ", cost);
    const orderObjData = {
      amount: cost,
      currency: "INR",
    };
    const order = await instance.orders.create(orderObjData);
    return res.status(200).json(order);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log(`Server running on port 3000!`));
