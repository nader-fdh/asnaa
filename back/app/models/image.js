const mongoose = require("mongoose");


const imageSchema = mongoose.Schema({
  imageName : String,
  created_at:{
    type: Date,
    default: Date.now,
  }
})


module.exports = mongoose.model("image", imageSchema);
