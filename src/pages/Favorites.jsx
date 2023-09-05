import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { connect } from "react-redux";
import "./Favorites.css";
import blogs from "../data.json";
function Favorites({ products, favorites, basket, dispatch }) {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    document.title = "Favorites";
  }, []);

  const removefavorit = (id) => {
    dispatch({
      type: "SET_Favorites",
      payload: [...favorites.filter((favorit) => favorit.id !== id)],
    });
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites.filter((favorit) => favorit.id !== id)])
    );
  };

  return (
    <section className="back">
      <div className="container">
        {favorites.length ? (
          <div className="favorite">
            {favorites.map((favorite) => {
              const blog = blogs.find((blog) => blog.id === favorite.id);
              if (!blog) {
                return null;
              }
              return (
                <div className="favorit-box" key={favorite.id}>
                  <div className="fovorite-img">
                    <img src={blog?.image} alt="" />
                    <span onClick={() => removefavorit(favorite.id)}>
                      <VscClose />
                    </span>
                  </div>
                  <div className="favorite-text">
                    <h1>{blog.title}</h1>
                    <Link  to={`/blog/${blog.id}`}>Read more ..</Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-favorit">
            <h1>Your favorite is empty</h1>
            <Link to="/blog">
              <button>Go Blog page</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
