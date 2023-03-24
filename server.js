const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const homePageRouter = require("./routes/homePage.js");
const park = require("./routes/park.js")

const bodyParser = require('body-parser');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "50mb"}));




// app.use("/home", homePageRouter);
app.use("/park", park);

const uri = process.env.ATLAS_URI;
mongoose.set("strictQuery", false);
mongoose.connect(uri);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
