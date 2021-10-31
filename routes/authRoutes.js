const express = require("express");
const db = require("../config/config");
const user = require("../users/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userBuild = require("../userBuild/schema");
const product = require("../products/schema");

let router = express.Router();

async function jwtAuthenticator(req, res, next) {
    console.log("here in jwt Middle Ware");
  let claimedToken = req.headers["bearer"];
  try {
    let decode = await jwt.verify(claimedToken, db.config.SECRET);
    let exist = await user.findOne({ _id: decode.id }).lean();

    //send the route handler the db object retrieved
    res.locals.userInDb = await exist;

    if (await exist) {
      next();
    } else await res.json({ status: "error", data: "not logged in" });
  } catch (e) {
    console.log(e);
    res.json({ status: "error", data: e });
  }
}


router.use(jwtAuthenticator);

//Post API

router.post("/saveBuild", async (req, res) => {
  try {
    const {
      Processor,
      Motherboard,
      Ram,
      PSU,
      Storage,
      GPU,
      Cooler,
      Fans,
      Case
    } = req.body;
    let createBuild = await userBuild.create({
      userName: res.locals.userInDb["username"],
      Processor,
      Motherboard,
      Ram,
      PSU,
      Storage,
      GPU,
      Cooler,
      Fans,
      Case
    });

    console.log(`Build Created Successfully, ${createBuild}`);

    res.json({ status: "ok", data: await createBuild });
  } catch (e) {
    await res.json({ status: "error", data: e });
  }
});

router.post("/createProduct", async (req, res) => {
  try {
    //create middleware for index
    const newProduct = ({
      _id,
      nameOfProduct,
      price,
      category,
      imageUrl
    } = req.body);
    if (!imageUrl) newProduct["imageUrl"] = "";
    console.log(newProduct);

    let createProduct = await product.create({ ...newProduct });
    console.log(`Product Created Successfully, ${await newProduct}`);
    res.json({ status: "ok", data: await createProduct });
  } catch (e) {
    console.log(e);
    res.json({ status: "error", data: e });
  }
});

router.put("/updateProduct/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let updatedProduct = req.body;
    let dbResponse = await product.findOneAndUpdate({ _id: id },updatedProduct).lean();
    let dbResponseNew = await product.find({_id:id}).lean();
    console.log(`Old db Response is ${await JSON.stringify(dbResponse)}`);
    console.log(`New db Response is ${await JSON.stringify(dbResponseNew)}`);

    if(dbResponse) {
        res.json(
            {status:'updated',
            data:{
            old: await dbResponse,
            new : await dbResponseNew
                }
            }
            );
    

    }
    else res.json({ status: "error", data: "not found" });


  } catch (e) {
    res.json({ status: "error", data: e });
  }
});

router.get("/check", async (req, res) => {
  console.log(`here local,${JSON.stringify(res.locals.userInDb)}`);
  res.json({ status: "ok", data: "hello" });
});

module.exports = router;
