import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shared from "./pages/Shared";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
