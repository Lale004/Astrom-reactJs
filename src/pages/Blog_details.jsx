// https://preview.themeforest.net/item/astron-
//astronomy-elementor-template-kit/full_screen_preview/44113556?_ga=2.29278334.33628818.1693227699-1533764322.1678290230
import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import blogs from "../data.json";
import { useParams } from "react-router-dom";
import "./Blog.css";
function Blog_details() {
    const { id } = useParams();
  let blog=blogs?.find((blog) => blog.id ==id);
  return (
    <>
      <div className="body">
        <div className="container">
            <div className="blog-title">
                <h1>{blog.title}</h1>
            </div>
          <div className="blog-detail-1">
            
           <div className="des1">
            <p>{blog.description1}</p>
           </div>
          </div>
          <div className="detail-img">
            <img src={blog.image} alt="" />
          </div>
          <div className="blog-detail-2">
            <p>{blog.description2}</p>
          </div>
        
          
        </div>
      </div>
    </>
  );
}

export default Blog_details;