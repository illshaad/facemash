const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(
    "mongodb+srv://illshaad:facemash@cluster0.isldhcs.mongodb.net/",
    options
  )
  .then(() => {
    console.info("connexion ok");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
