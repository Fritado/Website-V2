import React, { useEffect, useState } from "react";
import BlogGroup from "../components/BlogComponents/BlogGroup";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";
import { getAllBlogPosts } from "../services/operations/PostAPI";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL

const Blog = () => {
  // const [posts, setPosts] = useState([]);
  // const [noResults, setNoResults] = useState(false);

  // const fetchPosts = async() =>{
  //   try{
  //     // const res = await axios.get(BASE_URL + "/post/getAllPost");
  //     // console.log(res);

  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   const getPostDetails = async () => {
  //     try {
  //       const res = await getAllBlogPosts();
  //       console.log("Printing blog details", res);
  //       setPosts(res);

  //       if (res.data.length === 0) {
  //         setNoResults(true);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchPosts();
  // },[]);

  
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog"} />

      {/* Blog Group   key={posts._id} post={posts}*/}
      <BlogGroup />

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default Blog;
