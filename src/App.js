import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
