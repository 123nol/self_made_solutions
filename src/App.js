import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shared from "./pages/Shared";
import Home from "./pages/Home";
import { useState } from "react";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

import Error from "./pages/Error";
import Product from "./pages/Product";
import SingleServicePage from "./pages/SingleServicePage";
import ParticleBackground from "./components/ParticleBackground";

// import ProductData from "./data/ProductData";

function App() {
  const [order, setOrder] = useState(1);
  return (
    <>
      <ParticleBackground />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Shared order={order} change={(order) => setOrder(order)} />
            }
          >
            <Route
              index
              element={
                <Home order={order} change={(order) => setOrder(order)} />
              }
            />
            <Route path="/:serviceID" element={<SingleServicePage />} />

            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
