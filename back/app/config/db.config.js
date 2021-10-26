const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDB = () => {
  mongoose.connect(
    process.env.MONGO,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
      if (err) {
        throw err;
      }
      console.log("database is connected...");
    }
  );
};

module.exports = ConnectDB;
