const mongoose = require("mongoose");

const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.BBD, options)
  .then(() => {
    console.info("connexion ok");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
