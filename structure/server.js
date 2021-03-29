const user = require("./models/User");
require("dotenv").config();
const mongoose = require("mongoose");
require("../index.js");
const express = require("express");
const app = express();

// const router = express.Router();

const person = new user({
  name: "seif",
  age: 120,
  phone: 741852963,
  working: true,
});
person
  .save()
  .then((data) => {
    // console.log(data);
  })
  .catch((err) => {
    console.error("this is the error:", err);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome Aboard!!" });
});

app.get("/users", (req, res) => {
  user.find({}, (err, users) => {
    if (err) {
      res.status(400).json("Error! " + err);
    }
    res.json(users);
  });
});

app.post("/add", (req, res) => {
  user.create(
    [
      { name: "hakim", age: 12, phone: 7418529631, working: true },
      { name: "ross", age: 20, phone: 27451852963, working: false },
    ],
    (err, users) => {
      if (err) {
        res.status(400).json("Error! " + err);
      }
      res.json(users);
    }
  );
});

app.put("/update", (req, res) => {
  user.findOneAndUpdate({ _id: "6061017a94f445252472dc14" }, { age: 5 }, (err, users) => {
    if (err) {
      res.status(400).json("Error! " + err);
    }
    res.json(users);
  });
});

app.delete("/delete", (req, res) => {
  user.findByIdAndRemove("606111d0ab5f76277c2093a9", (err, users) => {
    if (err) {
      res.status(400).json("Error! " + err);
    }
    res.json(users);
  });
});


// app.use("/user", router);

app.listen("4000", () => {
  console.log("COnnecti !!!");
});