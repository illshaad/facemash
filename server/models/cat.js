const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
  url: String,
  id: String,
  vote: Number,
});

const dataModelCat = mongoose.model("cats", catSchema);

module.exports = dataModelCat;
