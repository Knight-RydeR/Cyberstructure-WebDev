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
    let claimedToken = req.headers["authorization"];
    console.log(claimedToken);
    if (!claimedToken || undefined || null)
      throw 'jwt invalid';
    else {
      claimedToken = claimedToken.replace("Bearer ", "");
      console.log(claimedToken);
      let decode = await jwt.verify(claimedToken, db.config.SECRET);
      let exist = await user.findOne({ _id: decode.id }).lean();

      //send the route handler the db object retrieved
      res.locals.userInDb = await exist ?? "not found";

      if (await exist) {
        next();
      } else throw "not found/invalid JWT";
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: {
        message: e ?? "Invalid JWT Failed",
        code: e.code ?? "",
      },
      data: "",
    });
  }
}

router.use(jwtAuthenticator);

//Post API

router.post("/saveBuild", async (req, res) => {
  try {
    let {
      Processor,
      Motherboard,
      Ram,
      PSU,
      Storage,
      GPU,
      Cooler,
      Fans,
      Case,
    } = req.body;
    
    if (!Processor || typeof Processor !== "string") {
      throw 'invalid power passed';
    }
    if (!Motherboard || typeof Motherboard !== "string") {
      throw 'invalid Motherboard passed';
    }
    if (!Ram || typeof Ram !== "string") {
      throw 'invalid Ram passed';
    }
    if (!PSU || typeof PSU !== "string") {
      throw 'invalid PSU passed';
    }
    if (!Storage || typeof Storage !== "string") {
      throw 'invalid Storage passed';
    }
    if (!GPU || typeof GPU !== "string") {
      throw 'invalid GPU passed';
    }
    if (!Cooler || typeof Cooler !== "string") {
      throw 'invalid Cooler passed';
    }
    if (!Fans || typeof Fans !== "string") {
      console.log(typeof Fans);
      throw 'invalid Fans passed';
    }
    if (!Case || typeof Case !== "string") {
      throw 'invalid power passed';
    }
    
    let response = await userBuild.create({
      userName: res.locals.userInDb["username"],
      Processor,
      Motherboard,
      Ram,
      PSU,
      Storage,
      GPU,
      Cooler,
      Fans,
      Case,
    });

    if(response){

    console.log(`Build Created Successfully, ${response}`);

    res.status(200).json({
      error: {
        message: "no error",
        code: "0",
      },
      data: response ?? "Something went wrong o.O",
    });
  }
  else {throw 'build failed'; }
  } catch (e) {
    console.log(`here is catch ${e}`);
   return res.status(401).json({  
      error: {
        message: e?? "Build Creation failed",
        code: e.code ?? "",
      },
      data: "", 
    });
  }
});

  




router.get("/check", async (req, res) => {
  console.log(`here local,${JSON.stringify(res.locals.userInDb)}`);
  res.status(200).json({
    error: {
      message: "no error",
      code: "0",
    },
    data: res.locals.userInDb ?? "Something went wrong o.O",
  });
});

module.exports = router;
