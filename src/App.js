import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Brands from "./components/Brands";
import About from "./components/About";
import Post from "./components/Post";
import Skills from "./components/Skills";
import Interest from "./components/Interest";
import Project from "./components/Project";
import Testimonial from "./components/Testimonial";
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
      <Interest />
      <Project />
      <Testimonial />
      <Footer />
    </Router>
  );
}

export default App;
