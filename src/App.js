import {BrowserRouter, Routes, Route } from "react-router-dom"

import Shared from "./pages/Shared";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Shared/>}>
        <Route index element={<Home/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
