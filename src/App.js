import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SinglePost from "./components/SinglePost";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<SinglePost />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
