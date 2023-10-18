import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shared from "./pages/Shared";
import Home from "./pages/Home";
import { useState } from "react";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error from "./pages/Error";
import Product from "./pages/Product";
import SingleServicePage from "./pages/SingleServicePage";
// import ProductData from "./data/ProductData";

function App() {
  const [order, setOrder] = useState(1);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Shared order={order} change={(order) => setOrder(order)} />}
        >
          <Route
            index
            element={<Home order={order} change={(order) => setOrder(order)} />}
          />

          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<SingleServicePage />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
