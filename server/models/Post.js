const mongoose = require("mongoose");

const PostScehma = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: false,
  },
  // user: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "User",
  //   required: false,
  // },
  category: {
    type: Array,
    required: false,
  },
  createdDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Post", PostScehma);
