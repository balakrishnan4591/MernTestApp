const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/students", require("./routes/studentRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server is started at port number 5000"));
