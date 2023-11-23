const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { baseMiddlewares } = require("./middlewares/base.middleware");
require("dotenv").config();
const app = express();

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(baseMiddlewares.notFoundHandler);
app.use(baseMiddlewares.errorHandler);

module.exports = app;
