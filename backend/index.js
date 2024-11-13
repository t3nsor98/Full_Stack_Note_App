const dotenv = require("dotenv");
require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString);

// models
const User = require("./models/user.model");
const Note = require("./models/note.model");
// express
const express = require("express");

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");

const cors = require("cors");

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

app.post("/add-note", authenticateToken, async (req, res) => {
  const { title, content, tags } = req.body;
  const { user } = req.user;
  if (!title || !content) {
    return res
      .status(400)
      .json({ error: true, message: "All fields are required" });
  }
  try {
    const note = new Note({
      title,
      content,
      tags: tags ? tags : [],
      userId: user._id,
    });
    await note.save();
    return res.json({ error: false, message: "Note added successfully", note });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Something went wrong" });
  }
});

app.put("/edit-note/:noteId", authenticateToken, async (req, res) => {
  const noteId = req.params.noteId.trim();
  const { title, content, tags, isPinned } = req.body;
  const { user } = req.user;

  if (!title && !content && !tags) {
    return res
      .status(400)
      .json({ error: true, message: "No Changes Detected" });
  }

  try {
    const note = await Note.findOne({ _id: noteId, userId: user._id });
    if (!note) {
      return res.status(404).json({ error: true, message: "Note not found" });
    }
    if (title) note.title = title;
    if (content) note.content = content; // Update the content field
    if (tags) note.tags = tags; // Update the tags field
    if (isPinned) note.isPinned = isPinned; // Update the isPinned field

    await note.save();

    return res.json({
      error: false,
      note,
      message: "Note updated successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: true, message: "Something went wrong", error });
  }
});

app.listen(8000);

module.exports = app;

// console.log("Token Secret:", process.env.ACCESS_TOKEN_SECRET);
