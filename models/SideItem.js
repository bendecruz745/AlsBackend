const { Decimal128 } = require("bson");
const { Schema, model } = require("../db/connection"); // import Schema & model

// SideItem Schema
const SideItemSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: Decimal128, required: true },
  description: { type: String, required: true, default: false },
});

// SideItem model
const sideItem = model("sideItem", SideItemSchema);

module.exports = sideItem;
