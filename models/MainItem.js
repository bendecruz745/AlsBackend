const { Decimal128 } = require("bson");
const { Schema, model } = require("../db/connection"); // import Schema & model

// MainItem Schema
const MainItemSchema = new Schema({
  name: { type: String, required: true },
  cost: { type: Decimal128, required: true },
  description: { type: String, required: true, default: false },
});

// MainItem model
const mainItem = model("mainItem", MainItemSchema);

module.exports = mainItem;
