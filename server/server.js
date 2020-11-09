const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  return res.status(200).send("Pong! 🏓");
});

app.get("/cat", (_req, res) =>
   res.send({ nodeEnv: process.env.NODE_ENV, catName: process.env.CAT_NAME })
);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
