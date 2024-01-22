import React from "react";
import BlogDetailsArea from "../components/BlogComponents/BlogDetailsArea";
import Breadcrumb from "../components/commonComp/Breadcrumb";
import Footer from "../components/commonComp/Footer";
import Header from "../components/commonComp/Header";

const BlogDetails = () => {
  return (
    <>
    <Header />
      {/* Navigation Bar */}
     

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog Details"} />

      {/* Blog Details Area */}
      <BlogDetailsArea />

      {/* Footer One */}
      <Footer />
    </>
  );
};

export default BlogDetails;
