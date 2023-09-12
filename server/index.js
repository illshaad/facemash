require("dotenv").config();
const mongoose = require("mongoose");
const db = require("./config/bdd");
const Cat = require("./models/cat");
const Axios = require("axios");
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const url = process.env.API_CAT;

app.use(cors());

app.post("/init", async (req, res) => {
  try {
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    const collectionNames = collections.map((collection) => collection.name);

    if (collectionNames.includes("cats")) {
      return res
        .status(409)
        .json({ message: "La collection 'cats' existe déjà" });
    }

    const response = await Axios.get(url);
    const cats = response.data.images;

    const catsToInsert = cats.map((cat) => ({
      id: cat.id,
      url: cat.url,
      vote: 0,
    }));

    await Cat.insertMany(catsToInsert);

    res.status(200).json({ message: "Les chats ont bien été insérés" });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données depuis l'URL : ",
      error
    );
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des données" });
  }
});

app.get("/random", async (req, res) => {
  try {
    const cats = await Cat.aggregate([{ $sample: { size: 2 } }]);
    res.status(200).json(cats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.get("/cats", async (req, res) => {
  try {
    const cats = await Cat.find();
    res.status(200).json(cats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.post("/vote", async (req, res) => {
  try {
    const { catId } = req.query;
    await Cat.findByIdAndUpdate(catId, { $inc: { vote: 1 } });
    res.status(200).json({ message: "Vote enregistré" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
