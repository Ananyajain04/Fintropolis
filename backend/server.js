const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./api/routes/auth");
const mongoose = require("mongoose");

dotenv.config();

const { DATABASE_URL } = process.env;

mongoose.connect = mongoose
  .connect(DATABASE_URL, {
    ssl: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const app = express();

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
