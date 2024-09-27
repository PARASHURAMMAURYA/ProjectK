const express = require("express");
const cors = require("cors");
const User = require("./db/user");
require("./db/config");
const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello guys");
});

// app.post('/signup',async(req,res)=>{
//   let user = new User(req.body);
//   let result = await user.save();
//        result =  result.toObject();
//     delete result.password;
//          Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
//           if(err){
//             res.send({ result: "No result Found" });
//           }
//           res.send({result, auth: token });
//         })
// })

// app.post('/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already exists" });
//     } else {
//       const user = new User({ name, email, password });
//       await user.save();

//       // Create a JWT token
//       const token = jwt.sign({ id: user._id, email: user.email }, jwtKey, { expiresIn: "2h" });

//       res.status(201).json({
//         message: "User created successfully",
//         user: { id: user._id, email: user.email },
//         auth: token,
//       });
//     }

// });

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


app.post('/profilecard',async(req,res)=>{
     let picture = new User(req.body);
   let result = await picture.save();
   res.send(result);
})

app.get("/profilecard", async (req, res) => {
  const result = await User.find(req.body);
  res.send(result);
  console.log(result);
});

app.listen(5000);
