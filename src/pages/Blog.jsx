// https://preview.themeforest.net/item/astron-
//astronomy-elementor-template-kit/full_screen_preview/44113556?_ga=2.29278334.33628818.1693227699-1533764322.1678290230
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TbHeartFilled, TbHeart } from "react-icons/tb";
import "./Home.css";
import "./Blog.css";
import blogs from "../data.json";
function Blog() {
  useEffect(() => {
    document.title = "Blog";
  }, []);

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const addfavorites = (id, title) => {
    dispatch({
      type: "SET_Favorites",
      payload: [...favorites, { id: id, title: title }],
    });
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, { id: id, title: title }])
    );
  };
  const removefavorites = (id) => {
    dispatch({
      type: "SET_Favorites",
      payload: [...favorites.filter((favorit) => favorit.id !== id)],
    });
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites.filter((favorit) => favorit.id !== id)])
    );
  };
  console.log(favorites);
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="blog-section-1">
            <div className="text">
              <h1>BLOG</h1>
              <p>To learn the depths of the cosmos together</p>
              <div className="nav-home-blog">
                {" "}
                <NavLink to="/">Home</NavLink>
                <a href="">/</a>
                <NavLink to="/blog">Blog</NavLink>
              </div>
            </div>
            <div className="moon-img">
              <img
                src="https://kitpro.site/astron/wp-content/uploads/sites/146/2023/02/the-moon-2021-08-26-16-29-10-utc-copy.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="section2-blog">
            <p>Our Blog</p>
            <h1>News & Blog </h1>
            <p>
              When we look into the depths of the universe, we better understand
              the great riddle within us.
            </p>
          </div>
          <div className="blogs">
            {blogs.map((blog) => (
              <div className="blog" key={blog.id}>
                <div className="blog-img">
                  <img src={blog.image} alt="" />
                  <span>{blog.date.slice(0, 7)}</span>
                  <div className="overlay">
                    <div className="heart_icon_products">
                      {favorites &&
                      favorites.some((fav) => fav.id === blog.id) ? (
                        <TbHeartFilled
                          onClick={() => removefavorites(blog?.id, blog?.title)}
                        />
                      ) : (
                        <TbHeart
                          onClick={() => addfavorites(blog?.id, blog?.title)}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="blog-text">
                  <h1>{blog.title}</h1>
                  <p>{blog.description1.slice(0, 60)} . . .</p>
                  {/* <Link to={`/blog/${blog.id}`}>Read more</Link>              */}
                  <Link to={`/blog/${blog.id}`}>Read more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
