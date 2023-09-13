require("dotenv").config();
const db = require("./config/bdd");

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const indexRouter = require("./routes/index");

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
