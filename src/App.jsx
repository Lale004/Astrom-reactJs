import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import About from "./pages/About";
import Blog from "./pages/Blog";
import Favorites from "./pages/Favorites";
import Blog_details from "./pages/Blog_details";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {pathname !== "/not-found" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/blog" element={<Blog />} />
        <Route path="/favorites" element={<Favorites />} />
         <Route path="/blog/:id" element={<Blog_details />} />
      </Routes>
      {/* {pathname !== "/not-found" && <Footer />} */}
    </>
  );
}
export default App;
