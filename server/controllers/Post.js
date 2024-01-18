const Post = require("../models/Post");
const User = require("../models/User");
require("dotenv").config();

//CREATE POST
export const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    const newPost = post.save();

    return res.status(200).json({
      success: true,
      message: "Post created successfully",
      newPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

//UPDATE POST
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      updatedPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while updating post",
    });
  }
};

//DELETE POST
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // await Comment.deleteMany({postId:req.params.id})
    await post.delete();

    return res.status(200).json({
      success: true,
      message: "Post has been deleted!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while deleting post",
    });
  }
};

//GET ALL POST
export const getAllPost = async (req, res) => {
  try {
    const category = req.query.category;
    let allPost;

    if (category) {
      allPost = await Post.find({
        categories: category,
      });
    } else {
      allPost = await Post.find({});
    }
    return res.status(200).json({
      success: true,
      message: "Getting all post",
      allPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getching post details",
    });
  }
};

//GET POST
export const getPost = async (req, res) => {
  try {
    // const  postDeatils = await Post.findById(request.params.id);
    const query=req.query;
    const searchFilter={
        title:{$regex:query.search, $options:"i"}
    }
    const postDeatils =await Post.find(query.search?searchFilter:null)

    return res.status(200).json({
        success: true,
        message: "Single post has been fetched successfully",
        postDeatils
      });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while getching post details",
    });
  }
};
