const mongoose = require("mongoose");
const Cat = require("../models/cat.js");
const Axios = require("axios");

const url = "https://latelier.co/data/cats.json";
const initializeApp = async (req, res) => {
  try {
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    const collectionNames = collections.map((collection) => collection.name);

    if (collectionNames.includes("cats")) {
      return res
        .status(409)
        .json({ message: "The 'cats' collection already exists" });
    }

    const response = await Axios.get(url);
    const cats = response.data.images;

    const catsToInsert = cats.map((cat) => ({
      id: cat.id,
      url: cat.url,
      vote: 0,
    }));

    await Cat.insertMany(catsToInsert);

    res.status(200).json({ message: "The cats have been inserted correctly" });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};

const getCats = async (req, res) => {
  const { sort } = req.query;

  try {
    let sorting = sort === "asc" ? { vote: 1 } : { vote: -1 };
    const cats = await Cat.find().sort(sorting);
    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json({ message: "Error server" });
  }
};

const randomeCat = async (req, res) => {
  try {
    const cats = await Cat.aggregate([{ $sample: { size: 2 } }]);
    res.status(200).json(cats);
  } catch (error) {
    res.status(500).json({ message: "Error server" });
  }
};

const addVote = async (req, res) => {
  try {
    const { catId } = req.query;
    await Cat.findByIdAndUpdate(catId, { $inc: { vote: 1 } });
    res.status(200).json({ message: "Vote success" });
  } catch (error) {
    res.status(500).json({ message: "Error server" });
  }
};

module.exports = {
  initializeApp,
  getCats,
  randomeCat,
  addVote,
};
