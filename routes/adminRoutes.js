const express = require("express");
const db = require("../config/config");
const user = require("../users/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userBuild = require("../userBuild/schema");
const product = require("../products/schema");
let categoryModel = require("../category/schema");

let router = express.Router();

async function adminChecker(req, res, next) {
  try {
    console.log("here in Admin Middle Ware");
    let extractedUser = res.locals.userInDb;
    console.log(extractedUser);

    if (extractedUser) {
      if (extractedUser["isAdmin"] == true) {
        return next();
      }
      return res.status(401).json({
        error: {
          message: "Not Admin",
          code: "",
        },
        data: "",
      });
    }
    return res.status(401).json({
      error: {
        message: "Not Found",
        code: "",
      },
      data: "",
    });
  } catch (e) {
    return res.status(401).json({
      error: {
        message: e ?? "Not Admin",
        code: e.code ?? "",
      },
      data: "",
    });
  }
}
router.use(adminChecker);

router.get("/check", async (req, res) => {
  console.log(`here local,${JSON.stringify(res.locals.userInDb)}`);
  res.status(200).json({
    error: {
      message: "no error",
      code: "0",
    },
    data: "Welcome M8",
  });
});
router.get("/isAdmin/:id", async (req, res) => {
  try {
    console.log("here in is");
    let id = req.params.id;
    let response = await user.findOne({ _id: id });
    if (response) {
      res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: (await response["isAdmin"]) ?? "Something went wrong o.O",
      });
    } else throw "admin of this id does not exist";
  } catch (e) {
    res.status(401).json({
      error: {
        message: e["name]"] ?? "Admin of this id does not exist",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});
router.put("/addAdmin/:id", async (req, res) => {
  try {
    console.log("here");

    let id = req.params.id;
    let test = await user.find({_id:id})
    if(!response) throw 'arara';

    let response = await user
      .findOneAndUpdate({ _id: id }, { isAdmin: true })
      .lean();
      
    let responseNew = await user.findOne({ _id: id }).lean();
    console.log("here");
    console.log(response);
    if (response || responseNew) {
      console.log("here");
      return res.json({
        status: "updated",
        data: {
          old: await response,
          new: await responseNew,
        },
      });
    } else {
      throw "wrong id, user not found";
    }
  } catch (e) {
    console.log("here in e")
    res.status(401).json({
      error: {
        message: e ?? "ID not foundDuplicate Account Rejected",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});

router.patch("/updateProduct/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let updatedProduct = req.body;
    let response = await product
      .findOneAndUpdate({ _id: id }, updatedProduct)
      .lean();
    let responseNew = await product.find({ _id: id }).lean();
    console.log(`Old db Response is ${await JSON.stringify(response)}`);
    console.log(`New db Response is ${await JSON.stringify(responseNew)}`);

    if (response) {
     return  res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: responseNew ?? "Something went wrong o.O",
      });
    } else throw "updating product failed";
  } catch (e) {
    res.status(401).json({
      error: {
        message: e ?? "updation failed",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});

router.get("/allusers", async (req, res) => {
  try{
  const response = await user.find({}).lean();
  //   console.log(response);
 
  if (response){
    var usersRegistered = [];
    response.map((e) => {
      console.log(e);
      usersRegistered.push({ users: e.username,nickname : e.nick,isAdmin : e.isAdmin });
    });
   return  await res.status(200).json({
      error: {
        message: "no error",
        code: "0",
      },
      data: usersRegistered ?? "Something went wrong o.O",
    });
  }
  }
  catch(e) {
    res.status(401).json({ error : {
      message : e?? "Duplicate Account Rejected",
      code :e.code ?? ""
    },
    data: ""
  
  });
  }
});

router.post("/createProduct", async (req, res) => {
  try {
    let count = (await product.countDocuments({})) ;
    console.log(`count is ${count} `);
    //create middleware for index
    console.log(req.body);
    let { nameOfProduct, price, category, imageUrl, power } = req.body;
    let products = { nameOfProduct, price, category, imageUrl, power };
    price = parseInt(price);
    power = parseInt(power);
    category = parseInt(category)
    if (!nameOfProduct || typeof nameOfProduct !== "string") {
      throw "invalid username passed";
    }
    if (!price || typeof price !== "number") {
      throw "invalid price passed";
    }

    if (!category || typeof category !== "number") {
      throw "invalid category passed";
    }
    if (!imageUrl || typeof imageUrl !== "string") {
      throw "invalid imageURL passed";
    }
    if (!power || typeof power !== "number") {
      throw "invalid power passed";
    }
    if (!imageUrl) response["imageUrl"] = "";

    let response = await product.create({ ...products, _id: count });
    if (response) {
      console.log(
        `Product Created Successfully, ${await JSON.stringify(
          response,
          null,
          2
        )}`
      );
      res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: response ?? "Something went wrong o.O",
      });
    } else {
      throw "creation Failed";
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: {
        message: e ?? "Creating Product Failed",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});

router.post("/createCategory", async (req, res) => {
  try {
    let count = (await categoryModel.countDocuments({})) + 1;
    console.log(`count is ${count} `);
    //create middleware for index
    console.log(req.body);
    const { nameOfCategory } = req.body;

    if (!nameOfCategory || typeof nameOfCategory !== "string") {
      throw "invalid username passed";
    }
    nameOfCategory.toLowerCase();
    let response = await categoryModel.create({ nameOfCategory, _id: count });
    if (response) {
      console.log(
        `Category Created Successfully, ${await JSON.stringify(
          response,
          null,
          2
        )}`
      );
      res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: response ?? "Something went wrong o.O",
      });
    } else {
      throw "creation Failed";
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({
      error: {
        message: e["name]"] ?? "Creating Product Failed",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});
router.get("/getCategory/:catName", async (req, res) => {
  try{
    let nameOfCategory = req.params.catName;
    nameOfCategory.toLowerCase();
    console.log(nameOfCategory)
  const response = await categoryModel.findOne({nameOfCategory}).lean();
    console.log(await response);
  
  if (response)
   return  await res.status(200).json({
      error: {
        message: "no error",
        code: "0",
      },
      data: response['_id'] ?? "Something went wrong o.O",
    });
    else throw 'category Not Found'
  }
  catch(e) {
    res.status(401).json({ error : {
      message : e?? "Duplicate Account Rejected",
      code :e.code ?? ""
    },
    data: ""
  
  });
  }
});

router.delete("/deleteProduct/:id", async (req, res) => {
  try {
    console.log("here in delete");
    let id = req.params.id;

    let response = await product.findByIdAndDelete(id);
    console.log(response);

    if (response) {
      res.status(200).json({
        error: {
          message: "no error",
          code: "0",
        },
        data: response ?? "Something went wrong o.O",
      });
    } else throw "deletion failed";
  } catch (e) {
    res.status(401).json({
      error: {
        message: e?? "Deletion",
        code: e.code ?? "",
      },
      data: "",
    });
  }
});
module.exports = router;
