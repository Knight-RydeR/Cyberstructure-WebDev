const express = require("express");
const db = require("../config/config");
const user = require("../users/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const product = require("../products/schema");
const userBuild = require("../userBuild/schema");
const mongoose = require('mongoose');


let router = express.Router();

router.get("/allusers", async (req, res) => {
  const dbResponse = await user.find({}).lean();
  //   console.log(dbResponse);
  var usersRegistered = [];
  dbResponse.map(e => {
    console.log(e);
    usersRegistered.push({ users: e.username });
  });
  if (dbResponse) await res.json({ status: "ok", data: usersRegistered });
});

router.post("/login", async (req, res) => {
  const { username, password: plainTextPassword } = req.body;
  const dbResponse = await user.findOne({ username }).lean();
  if (!dbResponse) {
    console.log("Not Found");

    await res.json({ status: "error", error: "invalid username/password" });
  } else if (await bcrypt.compare(plainTextPassword, dbResponse.password)) {
    console.log(dbResponse);

    const token = await jwt.sign(
      {
        id: dbResponse._id,
        username: dbResponse.username,
        nick: dbResponse.nick
      },
      db.config.SECRET,
      {
        expiresIn: "4hr"
      }
    );
    console.log(token);
    res.json({ status: "ok", data: token });
  } else {
    await res.json({ status: "error", data: "invalid password" });
  }
});

router.post("/register", async (req, res) => {
  console.log(req.body);

  //pre mongo checking
  const { username, password: plainTextPassword, nick } = req.body;
  if (!username || typeof username !== "string") {
    return res.json({ status: "error", error: "Invalid Username" });
  }
  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    return res.json({ status: "error", error: "Invalid plainTextPassword" });
  }
  if (plainTextPassword.length < 5) {
    return res.json({ status: "error", error: "less than min length" });
  }
  const password = await bcrypt.hash(plainTextPassword, 10);
  //mongo connection and creation
  try {
    const response = await user.create({
      username,
      password,
      nick
    });
    res.json({ status: "ok",data:response });

    console.log(`User created succesfully ${response}`);
  } catch (e) {
    if ((e.code = 11000))
      return res.json({ status: "error", error: "Duplicate Account" });
    throw error;
  }

});

//get



//search product by id, returns one product
router.get("/search/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let dbResponse = await product.findOne({ _id: id }).lean();
    console.log(await dbResponse);
    if (dbResponse) {
      res.json({ status: "ok", data: dbResponse });
    } else {
      res.json({ status: "errorr", error: "this product does not exist" });
    }
  } catch (e) {
    console.log(e);
    res.json({ status: "error", data: e });
  }
});
//returns all products matching the category
router.get("/search/category/:categoryName", async (req, res) => {
  try {
    let catName = req.params.categoryName.toLowerCase();
    let dbResponse = await product.find({ category: catName }).lean();
    if (dbResponse.length > 0) {
      res.json({ status: "ok", data: dbResponse });
    } else {
      res.json({
        status: "error",
        error: " product of this category does not exist"
      });
    }
  } catch (e) {
    console.log(e);
    res.json({ status: "error", data: e });
  }
});

router.get("/communityBuilds/rating/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let dbResponse = await userBuild.findOne({ _id: id }).lean();
     
      console.log(dbResponse);
      if (dbResponse) {
        let rating = await dbResponse['buildRating'];
        res.json(
            {
             status: "ok",
             data:rating
            });
      } else {
        res.json(
            {
          status: "error",
          error: " product of this id does not exist"
            }
            );
      }
    } catch (e) {
      console.log(e);
      res.json({ status: "error", data: e });
    }
  });
  
  router.get("/communityBuilds/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let dbResponse = await userBuild.findOne({ _id: id }).lean();
     
      console.log(dbResponse);
      if (dbResponse) {
        res.json(
            {
             status: "ok",
             data:dbResponse
            });
      } else {
        res.json(
            {
          status: "error",
          error: " Community Build of this id does not exist"
            }
            );
      }
    } catch (e) {
      console.log(e);
      res.json({ status: "error", data: e });
    }
  });

  router.get("/communityBuilds", async (req, res) => {
    try {
      let dbResponse = await userBuild.find({}).lean();
     
      console.log(dbResponse);
      if (dbResponse.length>0) {
        res.json(
            {
             status: "ok",
             data:dbResponse
            });
      } else {
        res.json(
            {
          status: "error",
          error: " No Community Build created yet"
            }
            );
      }
    } catch (e) {
      console.log(e);
      res.json({ status: "error", data: e });
    }
  });

module.exports = router;
