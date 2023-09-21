import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shared from "./pages/Shared";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error from "./pages/Error";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
