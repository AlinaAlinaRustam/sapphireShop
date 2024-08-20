import React from "react";
import Home from "./components/pages/Home";
import Navbar from "./components/gobalcom/Navbar";
import SinglePage from "./components/pages/SinglePage";
import Footer from "./components/gobalcom/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import NavDropdown from "./components/pages/NavDropdown";
import ProductUi from "./components/pages/ProductUi";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="/:id/:id2" element={<ProductUi />} />
          <Route path="/:id/:id2/:id4" element={<SinglePage />} />
          <Route path="/:id/:id2/:id4/:id3" element={<NavDropdown />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
