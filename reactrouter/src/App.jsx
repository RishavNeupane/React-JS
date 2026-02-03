import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Contactus from "./pages/ContactUs";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="navContainerStyle">
        <Link className="linkStyle" to="/">
          Home
        </Link>
        <Link className="linkStyle" to="/about">
          About Us
        </Link>
        <Link className="linkStyle" to="/blog">
          Blog
        </Link>
        <Link className="linkStyle" to="/contact">
          Contact Us
        </Link>
      </div>

      <Routes>
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;