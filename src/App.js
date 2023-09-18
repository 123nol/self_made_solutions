import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
