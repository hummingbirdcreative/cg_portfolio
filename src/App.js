import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Brands from "./components/Brands";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Skills from "./components/Skills";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <Brands />
      <About />
      <Post />
      <Skills />
      <Footer />
    </Router>
  );
}

export default App;
