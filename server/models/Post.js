const mongoose = require("mongoose");

const PostScehma = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    createdDate: {
      type: Date
  }
  },
  
);

module.exports = mongoose.model("post", PostScehma);
