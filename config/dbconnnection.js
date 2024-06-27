const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database connected sucessfully");
    })
    .catch((error) => {
      console.error("Database connection failed", error);
    });
};

module.exports = connectDB;
