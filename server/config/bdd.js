const mongoose = require("mongoose");

const options = {
  connectTimeoutMS: 5000,
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
