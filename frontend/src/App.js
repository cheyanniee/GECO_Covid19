import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";
import Work from "./pages/Work";
import WorkSingle from "./pages/WorkSingle";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/worksingle" element={<WorkSingle />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
