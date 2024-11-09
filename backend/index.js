require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);

const User = require("./models/user.model");

const express = require("express");

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");

const cors = require("cors");
// const dotenv = require("dotenv");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ data: "Hello World!" });
});

// create Account
app.post("/create-account", async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res
      .status(400)
      .json({ error: true, message: "All fields are required" });
  }

  const isUser = await User.findOne({ email: email });

  if (isUser) {
    return res.json({ error: true, message: "User already exists" });
  }

  const user = new User({ fullName, email, password });
  await user.save();
  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });

  return res.json({
    error: false,
    accessToken,
    user,
    message: "Registered Successfully",
  });
});

// login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: true, message: "All fields are required" });
  }
  const userInfo = await User.findOne({ email: email });

  if (!userInfo) {
    return res.json({ error: true, message: "User doesn't exist" });
  }

  if (userInfo.password !== password) {
    return res.json({ error: true, message: "Password doesn't match" });
  }

  if (userInfo.email == email && userInfo.password == password) {
    const accessToken = jwt.sign(
      { userInfo },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.json({
      error: false,
      accessToken,
      user: userInfo,
      message: "Login Successfully",
    });
  } else {
    return res
      .status(400)
      .json({ error: true, message: "Password doesn't match" });
  }
});

//Add Note

app.listen(8000);

module.exports = app;
