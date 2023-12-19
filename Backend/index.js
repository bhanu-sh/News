// import express
const express = require("express");
require("dotenv").config();

const userRouter = require("./routers/userRouter");
const newsRouter = require("./routers/newsRouter");
const utilRouter = require("./routers/utils");
const cors = require("cors");

// initialize express
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, "http://localhost:3000"],
  })
);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
// routes

app.use("/user", userRouter);
app.use("/news", newsRouter);
app.use("/util", utilRouter);

app.use(express.static("./uploads"));

// routes
app.get("/", (req, res) => {
  res.send("response from index");
});

app.get("/home", (req, res) => {
  res.send("response from home");
});

app.get("/add", (req, res) => {
  res.send("response from add");
});

app.get("/getall", (req, res) => {
  res.send("response from getall");
});

// starting the server
app.listen(port, () => {
  console.log("express server started");
});
