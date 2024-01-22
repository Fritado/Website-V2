const Post = require("../models/Post");
const User = require("../models/User");
require("dotenv").config();

//CREATE POST
exports.createPost = async (req, res) => {
  try {
    //const userId = req.user.id;
    // const {title, description, image ,category} = req.body;

    // if (title || description || image || category) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "All Fields are Mandatory",
    //   });
    // }
    //  const exisitingUser = await User.findById(userId);
    //   if (!exisitingUser) {
    //     return res.status(404).send({
    //       success: false,
    //       message: "unable to find user",
    //     });
    //   }
    // upload image code

    //create post with the given details
    const post = new Post(req.body);
    const newPost = await post.save();
    // const newPost = new Post({ title, description, image,category});

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      newPost,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to create post",
    });
  }
};

//UPDATE POST
exports.updatePost = async (req, res) => {
  try {
    const postId = await Post.findById(req.params.id);
    const { title, description, image } = req.body;

    if (!postId) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        ...req.body,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: " Blog Post updated successfully",
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
exports.deletePost = async (req, res) => {
  try {
    //const postId = req.body;
    // const post = await Post.findById(postId)
    const post = await Post.findById(req.params.id);
    // await Comment.deleteMany({postId:req.params.id})

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    await Post.findByIdAndDelete(post);

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
exports.getAllPost = async (req, res) => {
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
exports.getPost = async (req, res) => {
  try {
    //const { id } = req.params.id;
    const postDeatils = await Post.findById(req.params.id);

    if (!postDeatils) {
      return res.status(500).json({
        success: false,
        message: "Post not found  by this id",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Single post has been fetched successfully",
      postDeatils,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "Error while getting post details",
    });
  }
};

//GET USER POST
exports.userPost = async (req, res) => {
  try {
    const UserId = req.params.id;
    const userPost = await Post.find(UserId)

    if (!userPost) {
      return res.status(404).send({
        success: false,
        message: "blogs not found with this id",
      });
    }
    return res.status(200).send({
      success: true,
      message: "user blogs",
      userPost,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "error in user blog",
      error,
    });
  }
};
