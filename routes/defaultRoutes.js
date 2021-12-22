const express = require("express");
const db = require("../config/config");
const user = require("../users/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const product = require("../products/schema");
const userBuild = require("../userBuild/schema");
const mongoose = require("mongoose");
const customScraper = require('../scraper')

let router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password: plainTextPassword } = req.body;
    const dbResponse = await user.findOne({ username }).lean();
    if (!dbResponse) {
      console.log("Not Found");

      throw "no db response";
    } else if (await bcrypt.compare(plainTextPassword, dbResponse.password)) {
      console.log(dbResponse);

      const response = await jwt.sign(
        {
          id: dbResponse._id,
          username: dbResponse.username,
          nick: dbResponse.nick,
          isAdmin:dbResponse.isAdmin,
        },
        db.config.SECRET,
        {
          expiresIn: "4hr",
        }
      );
      console.log(response);
      res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: response ?? "Something went wrong o.O",
      });
    } else {
      throw "password matching failed";
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: {
        message: e ?? "Invalid Login",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});

router.post("/register", async (req, res) => {
  console.log(req.body);

  //pre mongo checking

  //mongo connection and creation
  try {
    const { username, password: plainTextPassword, nick } = req.body;
    if (!username || typeof username !== "string") {
      throw "username error";
    }
    if (!plainTextPassword || typeof plainTextPassword !== "string") {
      throw "password error";
    }
    if (plainTextPassword.length < 5) {
      throw "length criteria not specified ";
    }
    const password = await bcrypt.hash(plainTextPassword, 10);
    const response = await user.create({
      username,
      password,
      nick,
    });
    res.status(200).json({
      error: {
        message: "no error",
        code: "0",
      },
      data: response ?? "Something went wrong o.O",
    });

    console.log(`User created succesfully ${response}`);
  } catch (e) {
    console.log(`Error is  ${e}`);
    if (e.code == 11000) {
      return res.status(401).json({
        error: {
          message: "Duplicate Account Rejected",
          code: e.code ?? "",
        },
        data: "",
      });
    }
    res.status(401).json({
      error: {
        message: e,
        code: e.code ?? "",
      },
      data: "",
    });
  }
});

//search product by id, returns one product
router.get("/product/:id", async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    let response = await product.findOne({ _id: id }).lean();
    console.log(await response);
    if (response) {
      res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: response ?? "Something went wrong o.O",
      });
    } else {
      throw "item of this ID not found";
    }
  } catch (e) {
    console.log(e);
    res.status(404).json({ data: e });
  }
});
//returns all products matching the category
router.get("/product", async (req, res) => {
  try {
    let page = req.query.page;
    console.log(req.query)
    delete req.query.page;
    console.log(req.query)
    let dbResponse = await product.find(req.query).lean();
    if (!(await dbResponse)) throw "failed to get products";
    console.log(await dbResponse);
    if (page && dbResponse) {
      let limit = 2;
      page = parseInt(page);
      let startIndex = (page - 1) * limit;
      let endIndex = page * limit;
      let pagination = dbResponse.slice(startIndex, endIndex);
      console.log(pagination);
      return res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: pagination ?? "Something went wrong o.O",
      });
    } else
      return res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: dbResponse ?? "Something went wrong o.O",
      });
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: {
        message: e ?? "failed/ Rejected",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});

router.get("/communityBuilds/rating/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let dbResponse = await userBuild.findOne({ _id: id }).lean();

    console.log(dbResponse);
    if (dbResponse) {
      let response = await dbResponse["buildRating"];
      res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: response ?? "Something went wrong o.O",
      });
    } else {
      throw "failed to get rating";
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: {
        message: e["name]"] ?? "rating Failed",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});
router.get("/getUserBuild/:username", async (req, res) => {
  try {
    let username = req.params.username;
    let response = await userBuild.find({ userName:username}).lean();

    console.log(response);
    if (response) {
      res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: response ?? "Something went wrong o.O",
      });
    } else {
      throw "failed to get Build";
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: {
        message: e["name]"] ?? "Failed to get ID",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});
router.get("/communityBuilds/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let response = await userBuild.findOne({ _id: id }).lean();

    console.log(response);
    if (response) {
      res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: response ?? "Something went wrong o.O",
      });
    } else {
      throw "failed to get Build";
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: {
        message: e["name]"] ?? "Failed to get ID",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});

router.get("/communityBuilds", async (req, res) => {
  try {
    let { page } = req.query;
    let dbResponse = await userBuild.find({});
    console.log(await dbResponse);
    if (page) {
      let limit = 1;
      page = parseInt(page);
      let startIndex = (page - 1) * limit;
      let endIndex = page * limit;
      let pagination = dbResponse.slice(startIndex, endIndex);
      console.log(pagination);
      return res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: pagination ?? "Something went wrong o.O",
      });
    }

    let response = await dbResponse;

    console.log(response);
    if (response.length > 0) {
      res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: response ?? "Something went wrong o.O",
      });
    } else {
      throw "failed to get Community Builds";
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: {
        message: e["name]"] ?? "failed to get Community Builds",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});
router.get("/bestPrice/:name",async (req,res)=> {
  try{
    console.log(customScraper)
    console.log("here")
    console.log(req.params.name)
  let response = await customScraper(`${req.params.name}`);
  console.log("here" + response);
  if(Object.entries(response)<=0) throw  "aggregator failed";
  else {
 return res.status(200).json({ error : {
    message : "no error",
    code :"0"
  },
  data: response ?? "Something went wrong o.O"

});
  }
}
catch (e) {
  return res.status(404).json({
    error: {
      message: e["name]"] ?? "failed to get Best price",
      code: e.code ?? "",
    },
    data: "",
  });

}
});


module.exports = router;
