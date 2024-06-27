const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/dbconnnection.js");
const morgan = require("morgan");
const reservationRoute = require("./routes/userRoute.js");

connectDB();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*", // Allow all origins
  methods: ["GET", "POST"], // Specify allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
};

app.use(cors(corsOptions));

app.use("/api", reservationRoute);

const port = 3000;
app.listen(port, () => console.log(`server listening on ${port}`));
