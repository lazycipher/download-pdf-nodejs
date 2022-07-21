const express = require("express");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");

const receiptRoute = require("./routes/receiptRoute");
const errorHandler = require("./middleware/errorHandler");

const PORT = 5000;

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/ping", (req, res, next) => {
  return res.json({ message: "server up and running" });
});

app.use("/receipt", receiptRoute);

// 404 handler
app.use((req, res, next) => {
  next(createError.NotFound());
});

// pass any unhandled errors to the error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});

module.exports = app;
