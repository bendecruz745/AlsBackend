require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const MainItem = require("../models/MainItem");
const SideItem = require("../models/SideItem");
const DrinkItem = require("../models/DrinkItem");

const router = Router(); // create router to create route bundle

router.post("/test", async (req, res) => {
  res.json("test user response");
});

router.get("/Mains", async (req, res) => {
  res.json(await MainItem.find());
});

router.get("/Sides", async (req, res) => {
  res.json(await SideItem.find());
});

router.get("/Drinks", async (req, res) => {
  res.json(await DrinkItem.find());
});

module.exports = router;
