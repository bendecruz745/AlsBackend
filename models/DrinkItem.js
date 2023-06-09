const { Decimal128 } = require("bson");
const { Schema, model } = require("../db/connection"); // import Schema & model

// DrinkItem Schema
const DrinkItemSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: Decimal128, required: true },
  description: { type: String, required: true, default: false },
});

// DrinkItem model
const drinkItem = model("drinkItem", DrinkItemSchema);

module.exports = drinkItem;
