const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

dotenv.config();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(()=>{console.log("DB Connection started.......")})
    .catch((err)=>{
        console.log(err);
    });

app.get("/", (req, res)=>{
    res.send("Hello!");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 4000, ()=>{
    console.log("Server started listening on Port 4000.")
});
