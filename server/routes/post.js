const express = require("express");
const router = express.Router();

const {
  createPost,
  updatePost,
  deletePost,
  getAllPost,
  getPost,
  userPost
} = require("../controllers/Post");


router.post("/createPost", createPost);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.get("/getAllPost", getAllPost);
router.get("/getPost/:id", getPost);
router.get("/user/:userId", userPost);


module.exports = router;
