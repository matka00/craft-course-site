import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import Course from "./components/pages/Course";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:courseId" element={<Course />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
