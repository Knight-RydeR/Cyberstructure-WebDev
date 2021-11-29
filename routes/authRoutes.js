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
    
 

  try {
    let claimedToken = req.headers['authorization'];
    console.log(claimedToken)
    if(!claimedToken)await res.status(401).json({ data: "not logged in" });
    claimedToken = claimedToken.replace("Bearer ", "");
    console.log(claimedToken)
    let decode = await jwt.verify(claimedToken, db.config.SECRET);
    let exist = await user.findOne({ _id: decode.id }).lean();

    //send the route handler the db object retrieved
    res.locals.userInDb = await exist;

    if (await exist) {
      next();
    } else await res.status(401).json({ data: "not logged in" });
  } catch (e) {
    console.log(e);
    res.status(401).json({  data: e });
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
    let count = await product.countDocuments({}) +1;
    console.log(`count is ${count} `);
    //create middleware for index
    console.log(req.body);
    const newProduct = ({
      nameOfProduct,
      price,
      category,
      imageUrl
    } = req.body);

    if (!imageUrl) newProduct["imageUrl"] = "";

    let createProduct = await product.create({...newProduct,_id:count });
    console.log(`Product Created Successfully, ${await JSON.stringify(createProduct,null,2)}`);
    res.json({ status: "ok", data: await createProduct });
  } catch (e) {
    console.log(e);
    res.status(400).json({  data: e });
  }
});

router.patch("/updateProduct/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let updatedProduct = req.body;
    let dbResponse = await product.findOneAndUpdate({ _id: id },updatedProduct).lean();
    let dbResponseNew = await product.find({_id:id}).lean();
    console.log(`Old db Response is ${await JSON.stringify(dbResponse)}`);
    console.log(`New db Response is ${await JSON.stringify(dbResponseNew)}`);

    if(dbResponse) {
        res.status(200).json(
            {
            data:{
            old: await dbResponse,
            new : await dbResponseNew
                }
            }
            );
    

    }
    else res.status(404).json({ data: "not found" });


  } catch (e) {
    res.status(400).json({ data: e });
  }
});

router.get("/check", async (req, res) => {
  console.log(`here local,${JSON.stringify(res.locals.userInDb)}`);
  res.json({ status: "ok", data: "hello" });
});

module.exports = router;
