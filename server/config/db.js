const mongoose = require("mongoose");
require("dotenv").config();

const DbConnection = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("DB Connected Successfully..."))
    .catch((err) =>
      console.log("Something went wrong..! Unable to connect Db")
    );
};

module.exports = DbConnection;
