require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const MainItem = require("../models/MainItem"); // import user model

const router = Router(); // create router to create route bundle

router.post("/test", async (req, res) => {
  res.json("test user response");
});

router.get("/Mains", async (req, res) => {
  res.json(await MainItem.find());
});

module.exports = router;
