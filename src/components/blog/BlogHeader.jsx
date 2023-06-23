import React from "react";

import "./BlogHeader.css";
import HeaderSections from "../ui/HeaderSections";

function BlogHeader() {
  return (
    <>
      <HeaderSections headerClass={"blog-header"}>
        <h1>Blog</h1>
      </HeaderSections>
    </>
  );
}

export default BlogHeader;
