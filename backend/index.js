const multer = require("multer");
const express = require("express");
const cors = require("cors");
const User = require("./db/user");
require("./db/config");
const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm";
const app = express();
const dotenv = require("dotenv");
app.use(express.json());
app.use(cors());
const fs = require("fs");
dotenv.config();
 

app.get("/", (req, res) => {
  res.send("hello guys");
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  } else {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
      if (err) {
        res.send({ result: "No result Found" });
      }
      res.send({ result, auth: token });
    });
  }
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          res.send({ result: "No user Found" });
        }
        res.send({ user, auth: token });
      });
      //  res.send(user);
    } else {
      res.send({ result: "No user Found" });
    }
  } else {
    res.send({ result: "No user Found" });
  }
});

app.get("/userdata", async (req, res) => {
  const result = await User.find(req.body);
  res.send(result);
  console.log(result);
});

app.post("/profilecard", async (req, res) => {
  let picture = new User(req.body);
  let result = await picture.save();
  res.send(result);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Update user profile
app.patch(
  "/updateProfile",
  upload.single("profilePic"),
  async (req, res) => {
    const { name } = req.body;
    const profilePic = req.file ? req.file.path : null;

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        { name, profilePic },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

app.listen(5000);
