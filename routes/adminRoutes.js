const express = require("express");
const db = require("../config/config");
const user = require("../users/schema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userBuild = require("../userBuild/schema");
const product = require("../products/schema");

let router = express.Router();

async function adminChecker(req, res, next) {
  console.log("here in Admin Middle Ware");
let extractedUser = res.locals.userInDb;
console.log(extractedUser)
  
  if (extractedUser) {
    if (extractedUser["isAdmin"] == true) {
      next();
    } else await res.json({ status: "error", data: "not admin" });
  } else await res.json({ status: "error", data: "not found" });
}
router.use(adminChecker);

router.get("/check", async (req, res) => {
  console.log(`here local,${JSON.stringify(res.locals.userInDb)}`);
  res.status(200).json({data: "hello from admin" });
});
router.get("/isAdmin/:id", async (req, res) => {
  try {
    console.log("here in is");
    let id = req.params.id;
    let dbResponse = await user.findOne({ _id: id });
    if (dbResponse) {
      let isAdmin = await dbResponse["isAdmin"];
      res.json({ status: "admin", data: isAdmin });
    } else await res.json({ status: "error", data: "not found" });
  } catch (e) {
    await res.json({ status: "error", error: e });
  }
});
router.put("/addAdmin/:id", async (req, res) => {
  try {
    console.log("here");

    let id = req.params.id;

    let dbResponse = await user
      .findOneAndUpdate({ _id: id }, { isAdmin: true })
      .lean();
    let dbResponseNew = await user.findOne({ _id: id }).lean();
    console.log("here");
    console.log(dbResponse);

    if (dbResponse) {
      console.log("here");
      res.json({
        status: "updated",
        data: {
          old: await dbResponse,
          new: await dbResponseNew,
        },
      });
    } else await res.json({ status: "error", data: "not found" });
  } catch (e) {
    await res.json({ status: "error", error: e });
  }
});

module.exports = router;
