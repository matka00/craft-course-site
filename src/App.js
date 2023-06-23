import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import Course from "./components/pages/Course";
import Projects from "./components/pages/Projects";
import Blog from "./components/pages/Blog";
import SignUp from "./components/pages/SignUp";
import Notice from "./components/pages/Notice";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/:courseId" element={<Course />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
