require("dotenv").config();
const mongoose = require("mongoose");
//const { log } = require("mercedlogger");

const { DATABASE_URL } = process.env;

mongoose.connect = mongoose
  .connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// mongoose.connection
//   .on("open", () => log.green("Database connected"))
//   .on("close", () => log.magenta("Database disconnected"))
//   .on("error", (error) => log.red(error));

module.exports = mongoose;
