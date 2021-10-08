const express = require("express");
const app = express();
const cors = require("cors");
const DbConnection = require("./config/db");
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");

require("dotenv").config();
app.use(express.json());
app.use(cors());

// Connecting Db

DbConnection();

// Routers

app.use("/products", productRouter);
app.use("/users", userRouter);

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Runing on Port ${PORT}`);
});
