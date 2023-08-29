const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  category: String,
  subcategory: String,
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
